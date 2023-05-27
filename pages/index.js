import Head from 'next/head';
import About from '/components/About';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Skills from '/components/Skills';
import Projects from '../components/Projects';
import Contact from '/components/Contact';

const Home = () => {
  return (
    <>
      <Head>
        <title>Niklas Negri</title>
        <meta name="description" content="Niklas Negri" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default Home;