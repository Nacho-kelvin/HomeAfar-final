import { Link } from 'react-router-dom'
import { Hero, Photo, Stats, Journey, MediaTile, TILE3_SIZES } from '../components'
import { SECTORS, SECTOR_IMG, IG } from '../data/content.js'
import { usePage } from '../hooks/usePage.js'

export default function Home() {
  usePage('Home', 'HomeAFar connects Africans across borders through community, cultural exchange, storytelling, events and practical opportunities.')
  return (<>
    <Hero title="Home is wherever we find Each Other." lead="HomeAFar is an African-founded community and impact initiative connecting Africans across borders — starting from African experiences in Romania and Eastern Europe." img="authenticHome" mobile="authenticHome" pos="center 35%" mobilePos="center 35%">
      <div className="btn-row"><Link className="btn" to="/get-involved">Get involved</Link><Link className="btn ghost light" to="/about">Our story</Link></div>
    </Hero>
    <Stats />

    <section className="wrap sec"><div className="split">
      <Photo name="aboutChalk" sizes="(min-width:800px) 50vw, 92vw" className="rounded" />
      <div><span className="eyebrow">Who we are</span><h2>Home is not only a place on a map</h2>
        <p>HomeAFar was founded by Murugi Njiru, a Kenyan woman who moved to Romania in November 2024. She came to believe that home is also the belonging we create with others, and that belief is where this community began.</p>
        <div className="btn-row"><Link className="btn" to="/about">Read our story</Link></div></div>
    </div></section>

    <section className="wrap sec alt"><span className="eyebrow">What we do</span><h2>What HomeAFar does</h2>
      <p className="measure">We bring people together through community gatherings, cultural exchange and storytelling, and we are building practical pathways to belonging and opportunity.</p>
      <div className="grid4">{SECTORS.map(([to, t, d]) => <MediaTile key={to} to={to} img={SECTOR_IMG[to]} title={t}>{d}</MediaTile>)}</div></section>

    <section className="wrap sec"><span className="eyebrow">Community</span><h2>Ways to connect</h2>
      <div className="grid3">
        <MediaTile to="/events" img="pp3" title="Events" sizes={TILE3_SIZES}>Our first community event, Passport Picnic, took place on 30 August 2026.</MediaTile>
        <MediaTile to="/stories-from-afar" img="notebook" title="Stories From Afar" sizes={TILE3_SIZES}>The experiences of Africans living abroad, shared with consent.</MediaTile>
        <MediaTile to="/beyond-the-borders" img="gCulture" title="Beyond the Borders" sizes={TILE3_SIZES}>A series celebrating Africa's diversity, country by country.</MediaTile>
      </div></section>

    <section className="wrap sec dark"><div className="split"><Photo name="pp1" sizes="(min-width:800px) 50vw, 92vw" className="rounded" />
      <div><span className="eyebrow">Our first event</span><h2>Passport Picnic</h2><p className="meta">30 August 2026 · Tineretului Park, Bucharest</p><p>Our first community event, a cultural potluck with games bringing together participants connected to Kenya, the Republic of the Congo, Rwanda, Senegal and Zambia.</p><Link className="btn" to="/events">See the event</Link></div></div></section>

    <section className="wrap sec"><span className="eyebrow">Our journey</span><h2>From one move to a growing community</h2><Journey /></section>

    <section className="wrap sec green"><div className="split">
      <div><span className="eyebrow">Join us</span><h2>Be part of it</h2><p>Join as a member, volunteer, or partner with us, and follow along for what comes next.</p>
        <div className="btn-row"><Link className="btn" to="/get-involved">Get involved</Link><a className="btn ghost light" href={IG} target="_blank" rel="noreferrer">Follow on Instagram</a></div></div>
      <Photo name="involved" sizes="(min-width:800px) 420px, 80vw" className="rounded sq" />
    </div></section>
  </>)
}
