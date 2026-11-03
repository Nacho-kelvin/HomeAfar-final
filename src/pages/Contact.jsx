import { Hero, Notice, Form, Faq, Figure } from '../components'
import { FAQ, IG } from '../data/content.js'
import { usePage } from '../hooks/usePage.js'

export default function Contact() {
  usePage('Contact', 'Contact HomeAFar by form, email, Instagram or Facebook.')
  return (<><Hero title="Contact" lead="We would love to hear from you." img="handsets" mobile="handsets" pos="center" />
    <section className="wrap sec"><div className="split top"><div>
      <Figure name="handsets" sizes="(min-width:800px) 50vw, 92vw" caption="Illustrative image" className="contact-fig" />
      <div className="contact-list">
        <a className="tile ccard" href="mailto:homeafar26@gmail.com"><span className="eyebrow">Email</span><strong>homeafar26@gmail.com</strong></a>
        <a className="tile ccard" href={IG} target="_blank" rel="noreferrer"><span className="eyebrow">Instagram</span><strong>@home.a.far</strong></a>
        <div className="tile ccard"><span className="eyebrow">Facebook</span><strong>Home AFar</strong></div></div>
      <Notice>Please do not include medical details or detailed accounts of incidents in this form.</Notice></div>
      <div className="tile"><Form kind="contact" categories={['General question', 'Events', 'Safe Landing', 'Protection & Justice', 'Partnerships', 'Media']} /></div></div></section>
    <Faq items={[FAQ[1], FAQ[3], FAQ[5]]} title="Before you write" />
  </>)
}
