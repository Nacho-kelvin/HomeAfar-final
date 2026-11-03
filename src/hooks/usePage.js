import { useEffect } from 'react'

const HOME_TITLE = 'HomeAFar \u2014 Home is wherever we find Each Other'

// Sets the document title and meta description for a page and scrolls to the top on arrival.
export function usePage(title, description) {
  useEffect(() => {
    document.title = title === 'Home' ? HOME_TITLE : `${title} \u2014 HomeAFar`
    const m = document.querySelector('meta[name="description"]')
    if (m && description) m.setAttribute('content', description)
    window.scrollTo(0, 0)
  }, [title, description])
}
