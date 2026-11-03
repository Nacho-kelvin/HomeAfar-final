import { Link } from 'react-router-dom'
import { Hero, Notice, Figure, TILE_SIZES } from '../components'
import { PAGES, NAV } from '../data/content.js'
import { usePage } from '../hooks/usePage.js'

// Shared template for Safe Landing, Tourism to Africa, Protection & Justice and Women's Health & Impact.
export default function ContentPage({ slug }) {
  const p = PAGES[slug]
  usePage(p.title, p.lead)
  const related = (p.related || []).map((to) => NAV.find(([t]) => t === to)).filter(Boolean)
  return (<>
    <Hero title={p.title} lead={p.lead} img={p.img} mobile={p.mobile} pos={p.pos} />
    <section className="wrap sec"><div className="page-grid">
      <div className="measure"><Notice>{p.notice}</Notice>
        {p.sections.map(([h, body, list]) => <div key={h}><h2>{h}</h2>
          {list ? <ul>{body.map((b) => <li key={b}>{b}</li>)}</ul> : body.map((b) => <p key={b}>{b}</p>)}</div>)}
      </div>
      <aside className="side">
        {p.side && <Figure name={p.side} sizes="(min-width:1000px) 360px, 92vw" caption="Illustrative image" />}
        <div className="tile"><h3>Have a question?</h3><p>Tell us what you most need to know and we will point you in the right direction.</p><Link className="btn" to="/contact">Ask us a question</Link></div>
        {related.length > 0 && <div className="tile"><h3>Also explore</h3><ul className="links">{related.map(([to, l]) => <li key={to}><Link to={to}>{l}</Link></li>)}</ul></div>}
      </aside></div></section>
    {p.banner && <section className="wrap sec alt"><Figure name={p.banner[0]} sizes="(min-width:1180px) 1180px, 92vw" caption={p.banner[1]} ratio="r169" className="banner-fig" /></section>}
    {p.gallery && <section className="wrap sec alt"><span className="eyebrow">Coming to this page</span><h2>What we will explore</h2>
      <div className="grid4 figs">{p.gallery.map(([n, c]) => <Figure key={n} name={n} caption={c} sizes={TILE_SIZES} className="card" />)}</div></section>}
  </>)
}
