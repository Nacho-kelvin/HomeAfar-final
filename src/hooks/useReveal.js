import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Fades `.sec` sections in as they scroll into view. Content is never left hidden: a timed fallback reveals anything
// still pending, and reduced-motion / missing IntersectionObserver skip the effect entirely.
export function useReveal() {
  const { pathname } = useLocation()
  useEffect(() => {
    const root = document.documentElement
    if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) {
      root.classList.remove('js')
      return
    }
    root.classList.add('js')
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
    }), { threshold: 0.08 })
    const t = setTimeout(() => document.querySelectorAll('.sec').forEach((el) => io.observe(el)), 50)
    const safety = setTimeout(() => document.querySelectorAll('.sec:not(.in)').forEach((el) => el.classList.add('in')), 3000)
    return () => { clearTimeout(t); clearTimeout(safety); io.disconnect() }
  }, [pathname])
}
