import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Hero, Notice } from '../components'
import { OPP_TYPES } from '../data/content.js'
import { usePage } from '../hooks/usePage.js'
import { useRows } from '../hooks/useRows.js'

const fmt = (d) => new Date(d + 'T00:00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })

export default function Opportunities() {
  usePage('Opportunities', 'Verified scholarships, jobs, internships, volunteering, training and business opportunities.')
  const { rows, loading, error } = useRows('opportunities', 'expires_on')
  const [cat, setCat] = useState('All')
  const cats = ['All', ...new Set(rows.map((r) => r.category).filter(Boolean))]
  const shown = cat === 'All' ? rows : rows.filter((r) => r.category === cat)
  return (<><Hero title="Opportunities" lead="Scholarships, jobs, internships, volunteering, training, business and creative collaborations." img="gGrowth" />
    <section className="wrap sec"><Notice>Every listing shows its source and an expiry date where relevant.</Notice>
      {loading && <p>Loading opportunities…</p>}
      {error && <p role="alert">We could not load opportunities right now.</p>}
      {!loading && !error && rows.length === 0 && <div className="split top"><div><h2>No verified opportunities are listed yet</h2><p>When we publish them, you will find these kinds of opportunity here:</p>
        <div className="chips">{OPP_TYPES.map((c) => <span key={c}>{c}</span>)}</div>
        <p><Link className="btn" to="/get-involved">Subscribe for updates</Link></p></div>
        <div className="tile"><h3>How we check listings</h3><ol className="steps"><li>Each one needs a source link you can open yourself.</li><li>A closing date is shown wherever there is one.</li><li>It stays a draft until we have checked it.</li></ol></div></div>}
      {rows.length > 0 && <div className="tabs" role="group" aria-label="Filter by category">{cats.map((c) => <button key={c} aria-pressed={cat === c} onClick={() => setCat(c)}>{c}</button>)}</div>}
      <div className="grid2 flush">{shown.map((o) => <article className="tile" key={o.id}><h3>{o.title}</h3><p className="muted">{o.category}{o.expires_on && ` · Closes ${fmt(o.expires_on)}`}</p><p>{o.description}</p>
        <a href={o.source_url} target="_blank" rel="noreferrer">View source</a></article>)}</div></section></>)
}
