import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Bekijk.stream</title>
      </Head>

      <main>
        <Header title="Maak een korte link naar je stream!" />
        <p className="description">
          Voor een lage prijs een korte link naar jouw stream!
        </p>
      </main>

      <Footer />
    </div>
  )
}
