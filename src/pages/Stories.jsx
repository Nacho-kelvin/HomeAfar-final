import { Hero, Notice, Form } from '../components'
import { usePage } from '../hooks/usePage.js'

const THEMES = ['Belonging', 'Cultural adjustment', 'Loneliness', 'Identity', 'Personal growth']

export default function Stories() {
  usePage('Stories From Afar', 'Stories of Africans living abroad: belonging, loneliness, identity and growth.')
  return (<><Hero title="Stories From Afar" lead="Belonging, cultural adjustment, loneliness, identity and personal growth." img="armchair" pos="center 60%" />
    <section className="wrap sec"><div className="split top"><div><Notice>Stories are published only with the storyteller's consent. English and French versions, captions and transcripts will be offered where available.</Notice>
      <h2>Share yours</h2><p>No stories are published yet. If you would like to share yours, tell us a little about it and we will contact you.</p>
      <p>We are looking for stories about:</p><div className="chips">{THEMES.map((c) => <span key={c}>{c}</span>)}</div></div>
      <div className="tile"><Form kind="contact" categories={['Share my story']} messageLabel="A short summary (no private details yet)" button="Share interest" /></div></div></section></>)
}
