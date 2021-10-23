import Script from 'next/script'
import PageHead from './PageHead'
import NavHeader from './NavHeader'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <PageHead />
      <NavHeader />
      <main className='container-fluid'>{children}</main>
      <Script
        src='https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js'
        strategy='afterInteractive'
        integrity='sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj'
        crossOrigin='anonymous'
      />
      <Footer />
    </>
  )
}

export default Layout
