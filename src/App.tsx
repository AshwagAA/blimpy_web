import '@fontsource/gasoek-one'
import './framer/styles.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import FooterFramerComponent from './framer/footer.jsx'
import { Navbar, bg } from './lib/shared'
import NotFound from './pages/NotFound'

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

// ─── APP ─────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <BrowserRouter>
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
      <FooterFramerComponent.Responsive />
    </BrowserRouter>
  )
}
