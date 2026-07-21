import '@fontsource/gasoek-one'
import './framer/styles.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { lazy, Suspense, useEffect } from 'react'
import FooterFramerComponent from './framer/footer.jsx'
import { Navbar, bg } from './lib/shared'
import NotFound from './pages/NotFound'

// React Router's client-side navigation doesn't reset scroll position like a
// full page load does, so following a link near the bottom of a long page
// (e.g. a "Contact Us" CTA) lands on the next page still scrolled way down —
// clamped to the bottom if that page is shorter. Force scroll-to-top on
// every route change so every in-app link behaves the way a normal page
// navigation would.
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const Work = lazy(() => import('./pages/Work'))
const WorkDetail = lazy(() => import('./pages/Work').then(m => ({ default: m.WorkDetail })))
// Blog is temporarily disabled — see the removed /blog routes below.
// Re-enable by uncommenting these two lines and the two <Route> entries.
// const Blog = lazy(() => import('./pages/Blog'))
// const BlogDetail = lazy(() => import('./pages/Blog').then(m => ({ default: m.BlogDetail })))
const Pricing = lazy(() => import('./pages/Pricing'))
const Contact = lazy(() => import('./pages/Contact'))

function RouteFallback() {
  return <div style={bg} />
}

// The footer's "Let's Talk" heading + "[ Contact Us ]" button is only
// relevant on the Services page (every other page already has its own
// end-of-page CTA banner) — hidden elsewhere via .footer-cta-hidden in
// index.css since the footer itself renders once, outside <Routes>.
function AppShell() {
  const { pathname } = useLocation()
  const showFooterCta = pathname === '/service'
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Services />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<WorkDetail />} />
          {/* <Route path="/blog" element={<Blog />} /> */}
          {/* <Route path="/blog/:slug" element={<BlogDetail />} /> */}
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <div className={showFooterCta ? undefined : 'footer-cta-hidden'}>
        <FooterFramerComponent.Responsive style={{ width: '100%' }} />
      </div>
    </>
  )
}

// ─── APP ─────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  )
}
