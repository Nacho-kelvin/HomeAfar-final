import { useState } from 'react'
import { Link } from 'react-router-dom'
import { backendReady, getSupabase } from '../lib/supabase.js'

const FIELDS = { name: 'Your name', email: 'Email address' }

export default function Form({ kind, categories, messageLabel = 'Message', askName = true, askMessage = true, eventId, button = 'Send', done = 'Thank you. We have received your message.' }) {
  const [state, setState] = useState({ status: 'idle', errors: {} })
  async function submit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const f = new FormData(form)
    if (f.get('website')) return setState({ status: 'sent', errors: {} }) // honeypot: bots fill this hidden field
    const v = Object.fromEntries(f)
    const errors = {}
    if (askName && !v.name?.trim()) errors.name = 'Please enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(v.email || '')) errors.email = 'Please enter a valid email address.'
    if (askMessage && !v.message?.trim()) errors.message = 'Please write a short message.'
    if (!v.consent) errors.consent = 'Please agree so we can contact you.'
    if (Object.keys(errors).length) {
      setState({ status: 'invalid', errors })
      requestAnimationFrame(() => form.querySelector('[aria-invalid="true"]')?.focus())
      return
    }
    if (!backendReady) return setState({ status: 'error', errors: {} })
    setState({ status: 'sending', errors: {} })
    let error = null
    try {
      const supabase = await getSupabase()
      ;({ error } = await supabase.from('submissions').insert({
        kind, name: v.name?.trim() || null, email: v.email.trim(), category: v.category || null,
        message: v.message?.trim() || null, event_id: eventId || null, consent: true,
      }))
    } catch { error = true }
    setState({ status: error ? 'error' : 'sent', errors: {} })
    if (!error) form.reset()
  }
  const { status, errors } = state
  const err = (k) => errors[k] && <span className="err" id={`${kind}-${k}-e`}>{errors[k]}</span>
  const a = (k) => ({ id: `${kind}-${k}`, name: k, 'aria-invalid': !!errors[k], 'aria-describedby': errors[k] ? `${kind}-${k}-e` : undefined })
  return (
    <form className="form" onSubmit={submit} noValidate>
      {askName && <label>{FIELDS.name}<input {...a('name')} autoComplete="name" />{err('name')}</label>}
      <label>{FIELDS.email}<input {...a('email')} type="email" autoComplete="email" />{err('email')}</label>
      {categories && <label>Topic<select {...a('category')}>{categories.map((c) => <option key={c}>{c}</option>)}</select></label>}
      {askMessage && <label>{messageLabel}<textarea {...a('message')} rows="5" maxLength="3000" />{err('message')}</label>}
      <input className="hp" name="website" tabIndex="-1" autoComplete="off" aria-hidden="true" />
      <label className="check"><input {...a('consent')} type="checkbox" value="yes" />
        <span>I agree HomeAFar may use these details to reply to me. See the <Link to="/privacy">privacy notice</Link>.</span></label>{err('consent')}
      <button className="btn" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : button}</button>
      <p className="status" role="status" aria-live="polite">
        {status === 'sent' && done}
        {status === 'invalid' && 'Please fix the highlighted fields.'}
        {status === 'error' && 'Sorry, we could not send this right now. Please email homeafar26@gmail.com.'}
      </p>
    </form>
  )
}
