import { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

import { PageContent } from '@components/PageContent'
import { ThemeProvider } from '@contexts/ThemeProvider'
import { Layout } from '@layout'

import '@styles/global.css'

function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeStart', () => setIsLoading(true))
    router.events.on('routeChangeComplete', () => setIsLoading(false))
    router.events.on('routeChangeError', () => setIsLoading(false))
  }, [router.events])

  return (
    <ThemeProvider cookies={pageProps.cookies}>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <Layout>
        <Layout.Header />
        <Layout.Content>
          <PageContent isLoading={isLoading}>
            <Component {...pageProps} />
            <Layout.Footer />
          </PageContent>
        </Layout.Content>
        <Layout.MobileNav />
      </Layout>
    </ThemeProvider>
  )
}

export default App
