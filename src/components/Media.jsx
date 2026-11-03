import { PH, imgSrc, imgSrcSet } from '../data/images.js'

const objectPos = (p) => (p.pos ? { objectPosition: p.pos } : undefined)

export function Photo({ name, sizes = '(min-width:1000px) 360px, 90vw', className, ...rest }) {
  const p = PH[name]
  return <img className={className} src={imgSrc(p, p.w[1] || p.w[0])} srcSet={imgSrcSet(p)} sizes={sizes} alt={p.alt} style={objectPos(p)} loading="lazy" decoding="async" {...rest} />
}

// ratio: 'r169' (16:9) or 'r45' (4:5) override the default 4:3 frame.
export function Figure({ name, caption, sizes, className = '', ratio = '' }) {
  return <figure className={`fig ${ratio} ${className}`.trim()}><Photo name={name} sizes={sizes} />{caption && <figcaption>{caption}</figcaption>}</figure>
}

// Full-width hero. `mobile` swaps the picture below 700px; `pos` / `mobilePos` set the focal point per breakpoint.
export function Hero({ title, lead, img, mobile, pos, mobilePos, children }) {
  const d = PH[img], m = PH[mobile || img]
  const focal = pos || d.pos || 'center'
  const focalM = mobilePos || (mobile ? m.pos : '') || focal
  return (
    <section className="hero">
      <picture>
        <source media="(max-width:699px)" srcSet={imgSrcSet(m)} sizes="100vw" />
        <img className="hero-img" src={imgSrc(d, d.w[d.w.length - 1])} srcSet={imgSrcSet(d)} sizes="100vw" alt="" style={{ '--pos': focal, '--pos-m': focalM }} fetchPriority="high" decoding="async" />
      </picture>
      <div className="wrap hero-text"><h1>{title}</h1>{lead && <p className="lead">{lead}</p>}{children}</div>
    </section>
  )
}

// Uncropped 16:9 banner image inside the page width, used where the artwork itself carries text (e.g. About).
export function Banner({ name, sizes = '(min-width:1180px) 1180px, 92vw' }) {
  const p = PH[name]
  return (
    <div className="banner">
      <img src={imgSrc(p, p.w[p.w.length - 1])} srcSet={imgSrcSet(p)} sizes={sizes} alt={p.alt} width="1600" height="900" fetchPriority="high" decoding="async" />
    </div>
  )
}

export function Gallery({ names, label }) {
  return (
    <ul className="gallery" aria-label={label}>
      {names.map((n) => <li key={n}><Photo name={n} sizes="(min-width:1000px) 360px, 80vw" /></li>)}
    </ul>
  )
}
