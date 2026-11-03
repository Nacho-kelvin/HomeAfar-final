import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Header, Footer, BackToTop } from './components'
import { useReveal } from './hooks/useReveal.js'
import Home from './pages/Home.jsx'
const About = lazy(() => import('./pages/About.jsx'))
const ContentPage = lazy(() => import('./pages/ContentPage.jsx'))
const Events = lazy(() => import('./pages/Events.jsx'))
const Stories = lazy(() => import('./pages/Stories.jsx'))
const Beyond = lazy(() => import('./pages/Beyond.jsx'))
const Opportunities = lazy(() => import('./pages/Opportunities.jsx'))
const GetInvolved = lazy(() => import('./pages/GetInvolved.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))
const Privacy = lazy(() => import('./pages/Privacy.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))
const Admin = lazy(() => import('./pages/Admin.jsx'))

const CONTENT_SLUGS = ['safe-landing', 'tourism-to-africa', 'protection-and-justice', 'womens-health']

export default function App() {
  useReveal()
  return (<>
    <Header />
    <main id="main">
      <Suspense fallback={<div className="route-loading" aria-busy="true" />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {CONTENT_SLUGS.map((s) => <Route key={s} path={`/${s}`} element={<ContentPage slug={s} />} />)}
        <Route path="/events" element={<Events />} />
        <Route path="/stories-from-afar" element={<Stories />} />
        <Route path="/beyond-the-borders" element={<Beyond />} />
        <Route path="/opportunities" element={<Opportunities />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Suspense>
    </main>
    <Footer />
    <BackToTop />
  </>)
}
