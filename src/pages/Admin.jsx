import { useEffect, useState } from 'react'
import { backendReady } from '../lib/supabase.js'
import { supabase } from '../lib/supabaseClient.js'
import { usePage } from '../hooks/usePage.js'

export default function Admin() {
  usePage('Admin')
  useEffect(() => { // keep the dashboard out of search results
    const m = document.createElement('meta'); m.name = 'robots'; m.content = 'noindex, nofollow'; document.head.appendChild(m)
    return () => m.remove()
  }, [])
  const [session, setSession] = useState(null)
  const [isAdmin, setIsAdmin] = useState(null)
  const [msg, setMsg] = useState('')
  useEffect(() => {
    if (!backendReady) return
    supabase.auth.getSession().then(({ data }) => setSession(data.session))
    const { data } = supabase.auth.onAuthStateChange((_e, s) => setSession(s))
    return () => data.subscription.unsubscribe()
  }, [])
  useEffect(() => {
    if (!session) return setIsAdmin(null)
    supabase.from('admins').select('role').eq('user_id', session.user.id).maybeSingle().then(({ data }) => setIsAdmin(!!data))
  }, [session])
  async function login(e) {
    e.preventDefault(); setMsg('')
    const f = new FormData(e.currentTarget)
    const { error } = await supabase.auth.signInWithPassword({ email: f.get('email'), password: f.get('password') })
    if (error) setMsg('Sign-in failed. Check your email and password.')
  }
  if (!backendReady) return <section className="wrap sec"><h1>Admin</h1><p>The backend is not configured. See the README.</p></section>
  if (!session) return (<section className="wrap sec measure"><h1>Admin sign in</h1>
    <form className="form" onSubmit={login}><label>Email<input name="email" type="email" autoComplete="username" required /></label>
      <label>Password<input name="password" type="password" autoComplete="current-password" required /></label>
      <button className="btn">Sign in</button><p role="alert">{msg}</p></form></section>)
  if (isAdmin === null) return <section className="wrap sec"><p>Checking access…</p></section>
  if (!isAdmin) return <section className="wrap sec"><h1>No access</h1><p>This account is not an administrator.</p><button className="btn ghost" onClick={() => supabase.auth.signOut()}>Sign out</button></section>
  return <Dashboard />
}

function Dashboard() {
  const [tab, setTab] = useState('submissions')
  return (<section className="wrap sec"><div className="bar"><h1>Dashboard</h1><button className="btn ghost" onClick={() => supabase.auth.signOut()}>Sign out</button></div>
    <div className="tabs" role="tablist">{['submissions', 'events', 'opportunities'].map((t) => <button key={t} role="tab" aria-selected={tab === t} onClick={() => setTab(t)}>{t[0].toUpperCase() + t.slice(1)}</button>)}</div>
    {tab === 'submissions' ? <Submissions /> : <Manage table={tab} />}</section>)
}

function Submissions() {
  const [rows, setRows] = useState(null)
  const load = () => supabase.from('submissions').select('*').order('created_at', { ascending: false }).then(({ data }) => setRows(data || []))
  useEffect(() => { load() }, [])
  const set = async (id, status) => { await supabase.from('submissions').update({ status }).eq('id', id); load() }
  const del = async (id) => { if (confirm('Delete this submission permanently?')) { await supabase.from('submissions').delete().eq('id', id); load() } }
  if (!rows) return <p>Loading…</p>
  if (!rows.length) return <p>No submissions yet.</p>
  return rows.map((r) => <article className="tile wide" key={r.id}>
    <p><strong>{r.kind}</strong> · {r.status} · {new Date(r.created_at).toLocaleString('en-GB')}</p>
    <p>{r.name} &lt;{r.email}&gt; {r.category && `· ${r.category}`}</p><p>{r.message}</p>
    <button className="btn ghost" onClick={() => set(r.id, 'reviewed')}>Mark reviewed</button>{' '}
    <button className="btn ghost" onClick={() => set(r.id, 'archived')}>Archive</button>{' '}
    <button className="btn ghost" onClick={() => del(r.id)}>Delete</button></article>)
}

const FIELDS = {
  events: [['title', 'Title', 'text', true], ['starts_on', 'Date', 'date', true], ['location', 'Location', 'text'], ['description', 'Description', 'text'], ['ticket_url', 'Ticket link (optional)', 'url']],
  opportunities: [['title', 'Title', 'text', true], ['category', 'Category (Scholarship, Job, …)', 'text', true], ['source_url', 'Source link', 'url', true], ['expires_on', 'Expiry date', 'date'], ['description', 'Description', 'text']],
}

function Manage({ table }) {
  const [rows, setRows] = useState(null)
  const [err, setErr] = useState('')
  const load = () => supabase.from(table).select('*').order('created_at', { ascending: false }).then(({ data }) => setRows(data || []))
  useEffect(() => { setRows(null); load() }, [table])
  async function add(e) {
    e.preventDefault(); setErr('')
    const v = Object.fromEntries([...new FormData(e.currentTarget)].filter(([, x]) => x !== ''))
    if (table === 'events') v.registration_open = !!v.registration_open
    const { error } = await supabase.from(table).insert({ ...v, published: false })
    if (error) return setErr('Could not save: ' + error.message)
    e.target.reset(); load()
  }
  const toggle = async (r) => { await supabase.from(table).update({ published: !r.published }).eq('id', r.id); load() }
  const del = async (r) => { if (confirm('Delete permanently?')) { await supabase.from(table).delete().eq('id', r.id); load() } }
  return (<><form className="form tile" onSubmit={add}><h3>Add new (saved as draft)</h3>
    {FIELDS[table].map(([k, l, t, req]) => <label key={k}>{l}<input name={k} type={t} required={req} /></label>)}
    {table === 'events' && <label className="check"><input type="checkbox" name="registration_open" value="yes" /><span>Open registration</span></label>}
    <button className="btn">Save draft</button><p role="alert">{err}</p></form>
    {!rows ? <p>Loading…</p> : rows.map((r) => <article className="tile wide" key={r.id}><h3>{r.title}</h3><p>{r.published ? 'Published' : 'Draft'}</p>
      <button className="btn ghost" onClick={() => toggle(r)}>{r.published ? 'Unpublish' : 'Publish'}</button>{' '}<button className="btn ghost" onClick={() => del(r)}>Delete</button></article>)}</>)
}
