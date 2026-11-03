import { Link } from 'react-router-dom'
import { Photo } from './Media.jsx'

export const TILE_SIZES = '(min-width:1000px) 270px, (min-width:700px) 45vw, 92vw'
export const TILE3_SIZES = '(min-width:1200px) 380px, (min-width:900px) 31vw, (min-width:560px) 46vw, 92vw'

export default function MediaTile({ to, img, title, children, sizes = TILE_SIZES }) {
  return (
    <Link to={to} className="tile media">
      <Photo name={img} sizes={sizes} />
      <div className="tb"><h3>{title}</h3><p>{children}</p><span className="more" aria-hidden="true">Learn more →</span></div>
    </Link>
  )
}
