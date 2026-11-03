import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { NAV } from '../data/content.js'
import { BRAND } from '../data/images.js'

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    const onResize = () => window.innerWidth >= 1200 && setOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
      document.body.style.overflow = ''
    }
  }, [open])
  return (
    <header className="header">
      <a className="skip" href="#main">Skip to content</a>
      <Link to="/" className="brand" onClick={() => setOpen(false)}>
        <img src={BRAND.logo} alt="" width="44" height="44" /><span>HomeAFar</span>
      </Link>
      <button className="burger" aria-expanded={open} aria-controls="menu" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>
        <span /><span /><span />
      </button>
      <nav id="menu" className={open ? 'menu open' : 'menu'} aria-label="Main">
        {NAV.map(([to, label, short]) => (
          <NavLink key={to} to={to} onClick={() => setOpen(false)}><span className="f">{label}</span><span className="s">{short || label}</span></NavLink>
        ))}
      </nav>
    </header>
  )
}
