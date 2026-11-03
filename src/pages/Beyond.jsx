import { Hero, Notice, Photo } from '../components'
import { COUNTRIES, TOPICS } from '../data/content.js'
import { usePage } from '../hooks/usePage.js'

export default function Beyond() {
  usePage('Beyond the Borders', 'A country and culture series celebrating the diversity of Africa.')
  return (<><Hero title="Beyond the Borders" lead="Africa's diversity, country by country: culture, history, languages, food, music, fashion, tourism, economy and contemporary life." img="gCulture" />
    <section className="wrap sec"><div className="split top"><div><Notice>Country profiles are in preparation and will be published only after their facts are checked against credible sources.</Notice>
      <h2>What every profile will cover</h2><div className="chips">{TOPICS.map((c) => <span key={c}>{c}</span>)}</div></div>
      <Photo name="gFood" sizes="(min-width:800px) 50vw, 92vw" className="rounded" /></div></section>
    <section className="wrap sec alt"><span className="eyebrow">The series</span><h2>First countries</h2>
      <div className="grid4">{COUNTRIES.map(([n, d]) => <div className="tile" key={n}><h3>{n}</h3><p>{d || 'Profile coming soon.'}</p><span className="badge">Coming soon</span></div>)}</div></section></>)
}
