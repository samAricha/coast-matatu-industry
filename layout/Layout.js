import Head from 'next/head'
import Script from 'next/script'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta name='title' content='Coast Matatu Industry' />
        <meta
          name='description'
          content='Coast Matatu Industry is a community of businesses and entrepreneurs in the matatu industry within the Kenya Coastal region. Matatus Business Advice'
        />
        <meta
          name='keywords'
          content='Matatu, Mombasa, CMI, Coast Matatu Industry, Free Transport, Cheap trasport in mombasa, Kisauni, Bamburi, Mombasa1'
        />
        <meta name='robots' content='index, follow' />
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <meta name='language' content='English' />
        <meta name='revisit-after' content='1 days' />
        <meta name='author' content='Chris Achinga' />
      </Head>
      <main>{children}</main>
      <Script
        src='https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js'
        strategy='afterInteractive'
        integrity='sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj'
        crossOrigin='anonymous'
      />
    </>
  )
}

export default Layout
