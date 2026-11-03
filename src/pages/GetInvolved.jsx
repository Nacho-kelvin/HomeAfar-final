import { Hero, Form, Faq, Photo } from '../components'
import { FAQ } from '../data/content.js'
import { usePage } from '../hooks/usePage.js'

const WaysTile = ({ id, title, blurb, children }) => <div className="tile formtile" id={id}><h3>{title}</h3><p>{blurb}</p>{children}</div>

export default function GetInvolved() {
  usePage('Get Involved', 'Become a member, volunteer, partner with HomeAFar or subscribe to updates.')
  return (<><Hero title="Get Involved" lead="Choose the way that suits you." img="pp1" mobile="desk" pos="center 40%" />
    <section className="wrap sec">
      <div className="split intro-split"><div><span className="eyebrow">Join in</span><h2>There is a place for you here</h2>
        <p>Whether you have an hour, a skill, an organisation or simply curiosity, there is a way to take part. Pick one below, or jump straight to it.</p>
        <nav className="chips jump" aria-label="Ways to get involved"><a href="#member">Become a member</a><a href="#volunteer">Volunteer</a><a href="#partner">Partner with us</a><a href="#subscribe">Subscribe</a></nav></div>
        <Photo name="involved" sizes="(min-width:800px) 420px, 80vw" className="rounded sq" /></div>
      <div className="grid-forms">
        <WaysTile id="member" title="Become a member" blurb="Join the community and be part of what we build together."><Form kind="membership" askMessage={false} button="Express interest" done="Thank you. We will be in touch about membership." /></WaysTile>
        <WaysTile id="volunteer" title="Volunteer" blurb="Lend your time and skills to events, content and community care."><Form kind="volunteer" messageLabel="How would you like to help?" button="Apply" done="Thank you. We will review your application." /></WaysTile>
        <WaysTile id="partner" title="Partner with us" blurb="Organisations, businesses and creators: let us explore working together."><Form kind="partner" messageLabel="About your organisation and idea" button="Send inquiry" /></WaysTile></div></section>
    <section className="wrap sec green" id="subscribe"><div className="split"><div><span className="eyebrow">Stay in the loop</span><h2>Subscribe to updates</h2><p>Be first to hear about events, stories and opportunities. No spam, and you can ask us to remove your details at any time.</p></div>
      <div className="tile"><Form kind="newsletter" askName={false} askMessage={false} button="Subscribe" done="You are subscribed. Thank you." /></div></div></section>
    <Faq items={FAQ} />
  </>)
}
