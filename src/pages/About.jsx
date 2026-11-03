import { Link } from 'react-router-dom'
import { Banner, Photo, Journey } from '../components'
import { FOUNDERS, VALUES } from '../data/content.js'
import { usePage } from '../hooks/usePage.js'

export default function About() {
  usePage('About', 'The story, mission, vision and values of HomeAFar, founded by Murugi Njiru.')
  return (<>
    <section className="wrap about-intro">
      <Banner name="aboutHero" />
      <div className="about-head"><span className="eyebrow">About us</span><h1>About HomeAFar</h1>
        <p className="lead">Home is not only a place on a map. It can be the people who welcome us.</p></div>
    </section>

    <section className="wrap sec"><div className="split top"><div><span className="eyebrow">Our story</span><h2>Where HomeAFar began</h2>
      <p>HomeAFar was inspired by the journey of its founder, Murugi Njiru, a Kenyan woman who moved to Romania in November 2024. Starting over in another country can bring possibility, and it can also bring unfamiliar systems, cultural adjustment and loneliness. She came to believe that home is also the belonging we create with others.</p>
      <p>HomeAFar is an evolving journey. Not every planned programme is operating yet.</p></div>
      <Photo name="team" sizes="(min-width:800px) 50vw, 92vw" className="rounded" /></div></section>

    <section className="wrap sec alt"><div className="grid2 flush">
      <div className="tile"><span className="eyebrow">Mission</span><p>To strengthen African presence and connection in Eastern Europe through community, economic opportunities, events and cultural exchange, while building a platform for advocacy, practical support and meaningful social impact.</p></div>
      <div className="tile"><span className="eyebrow">Vision</span><p>To grow into a trusted, internationally connected African community organisation that helps people move from merely surviving abroad to thriving with dignity, connection, opportunity and access to support.</p></div></div></section>

    <section className="wrap sec"><span className="eyebrow">What guides us</span><h2>Values</h2><div className="grid4">{VALUES.map(([t, d]) => <div className="tile" key={t}><h3>{t}</h3><p>{d}</p></div>)}</div></section>

    <section className="wrap sec dark"><div className="split top"><div><span className="eyebrow">The people</span><h2>Founders</h2>
      <div className="stack">{FOUNDERS.map(([n, r, d]) => <div className="tile" key={n}><h3>{n}</h3><p className="role">{r}</p><p>{d}</p></div>)}</div></div>
      <Photo name="pp2" sizes="(min-width:800px) 50vw, 92vw" className="rounded" /></div></section>

    <section className="wrap sec"><span className="eyebrow">Our journey</span><h2>How we got here</h2><Journey /></section>

    <section className="wrap sec cta green"><h2>Help us build it</h2><p>Members, volunteers and partners shape what HomeAFar becomes.</p><div className="btn-row center"><Link className="btn" to="/get-involved">Get involved</Link><Link className="btn ghost light" to="/contact">Contact us</Link></div></section>
  </>)
}
