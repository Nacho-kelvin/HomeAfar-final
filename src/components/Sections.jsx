import { Link } from 'react-router-dom'
import { FAQ, STATS, JOURNEY } from '../data/content.js'

export const Notice = ({ children }) => <p className="notice" role="note">{children}</p>

export function Faq({ items = FAQ, title = 'Questions people ask', eyebrow = 'FAQ' }) {
  return (
    <section className="wrap sec"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>
      <div className="faq">{items.map(([q, a]) => (
        <details key={q}><summary>{q}</summary>
          <p>{a.includes('privacy notice') ? <>{a.replace(' Read the privacy notice for details.', '')} <Link to="/privacy">Read the privacy notice.</Link></> : a}</p>
        </details>
      ))}</div>
    </section>
  )
}

export function Stats() {
  return (
    <section className="statband" aria-label="HomeAFar at a glance">
      <ul className="wrap stats">{STATS.map(([n, l, d]) => <li key={l}><b>{n}</b><span>{l}</span><small>{d}</small></li>)}</ul>
    </section>
  )
}

export function Journey() {
  return (
    <ol className="journey">{JOURNEY.map(([when, t, d]) => (
      <li key={when}><span className="when">{when}</span><h3>{t}</h3><p>{d}</p></li>
    ))}</ol>
  )
}
