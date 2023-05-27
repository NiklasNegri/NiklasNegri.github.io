import Head from 'next/head';
import Hero from '../components/Hero'

const Home = () => {
  return (
    <>
      <Head>
        <title>Niklas portfolio</title>
        <meta name="description" content="Niklas Negri portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Hero />
      </div>
    </>
  );
};

export default Home;