import { Link } from 'react-router-dom'
import { FOOTER_NAV } from '../data/content.js'
import { BRAND } from '../data/images.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap foot-grid">
        <div className="foot-brand">
          <Link to="/" className="brand"><img src={BRAND.logo} alt="" width="40" height="40" /><span>HomeAFar</span></Link>
          <p>Home is wherever we find Each Other.</p>
          <p className="foot-links-inline">
            <a href="mailto:homeafar26@gmail.com">homeafar26@gmail.com</a>
            <a href="https://www.instagram.com/home.a.far/" target="_blank" rel="noreferrer">Instagram @home.a.far</a>
            <span>Facebook: Home AFar</span>
          </p>
        </div>
        {Object.entries(FOOTER_NAV).map(([h, links]) => (
          <nav key={h} aria-label={h}><h2 className="foot-h">{h}</h2>
            <ul>{links.map(([to, l]) => <li key={to}><Link to={to}>{l}</Link></li>)}</ul></nav>
        ))}
      </div>
      <div className="wrap foot-base"><span>© {new Date().getFullYear()} HomeAFar. All rights reserved.</span><span>Founded by Murugi Njiru</span></div>
    </footer>
  )
}
