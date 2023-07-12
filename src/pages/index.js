import Head from 'next/head'
import NavBar from './components/navbar/navbar'
import Subtitle from './components/tipography/subtitle/subtitle'
import Container from './components/container/container'

export default function Home() {
  return (
    <>
      <Head>
        <title>DevSteam: A sua loja online de games</title>
        <meta name="description" content="DevSteam: A sua loja online de games" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <NavBar/>
        <Container>
          <div>
            <Subtitle>promoções</Subtitle>
          </div>
          <div>
            <Subtitle>outros jogos</Subtitle>
          </div>
      </Container>
      </div>
    </>
  )
}
