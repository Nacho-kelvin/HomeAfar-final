import { useState } from 'react'
import { Hero, Form, Gallery, Photo, Figure } from '../components'
import { GALLERY } from '../data/content.js'
import { usePage } from '../hooks/usePage.js'
import { useRows } from '../hooks/useRows.js'

const fmt = (d) => new Date(d + 'T00:00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
const today = () => new Date().toISOString().slice(0, 10)

export default function Events() {
  usePage('Events', 'Upcoming and past HomeAFar community events, including Passport Picnic.')
  const { rows, loading, error } = useRows('events', 'starts_on')
  const [reg, setReg] = useState(null)
  const upcoming = rows.filter((e) => e.starts_on >= today())
  const past = rows.filter((e) => e.starts_on < today()).reverse()
  const empty = !loading && !error && upcoming.length === 0
  return (<>
    <Hero title="Events" lead="Moments to meet, share culture, play and feel included." img="pp2" mobile="desk" pos="center 35%" />
    <section className="wrap sec"><span className="eyebrow">What's next</span><h2>Upcoming events</h2>
      {loading && <p>Loading events…</p>}
      {error && <p role="alert">We could not load events right now. Please try again later.</p>}
      {empty && <div className="split top">
        <div className="stack flush">
          <div className="tile"><h3>No upcoming events are announced yet</h3><p>We would love you to be first to know when the next gathering is planned.</p></div>
          <div className="tile"><h3>Hear first</h3><Form kind="newsletter" askName={false} askMessage={false} button="Subscribe" done="You are subscribed. Thank you." /></div>
        </div>
        <Figure name="wedding" sizes="(min-width:800px) 480px, 92vw" caption="Illustrative image: the kind of evening we hope to host" ratio="r45" className="event-fig" />
      </div>}
      {upcoming.map((e) => <article className="tile wide" key={e.id}><h3>{e.title}</h3><p className="meta">{fmt(e.starts_on)}{e.location && ` · ${e.location}`}</p><p>{e.description}</p>
        <div className="btn-row">{e.ticket_url && <a className="btn" href={e.ticket_url} rel="noreferrer" target="_blank">Tickets</a>}
          {e.registration_open && <button className="btn ghost" onClick={() => setReg(reg === e.id ? null : e.id)}>Register</button>}</div>
        {reg === e.id && <Form kind="event_registration" eventId={e.id} askMessage={false} button="Register" done="You are registered. Thank you." />}
      </article>)}</section>
    <section className="wrap sec alt"><span className="eyebrow">Look back</span><h2>Past events</h2>
      <div className="split top"><div><article className="tile"><h3>Passport Picnic</h3><p className="meta">30 August 2026 · Tineretului Park, Bucharest</p>
        <p>A cultural potluck with games, bringing together participants connected to Kenya, the Republic of the Congo, Rwanda, Senegal and Zambia.</p></article>
        {past.map((e) => <article className="tile wide" key={e.id}><h3>{e.title}</h3><p className="meta">{fmt(e.starts_on)}{e.location && ` · ${e.location}`}</p><p>{e.description}</p></article>)}</div>
        <Photo name="poster" sizes="(min-width:700px) 480px, 92vw" className="rounded poster" /></div>
      <Gallery names={GALLERY} label="Passport Picnic photographs" /></section>
  </>)
}
