import '../styles/globals.css';
import Layout from '../components/Layout';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { config } from "@fortawesome/fontawesome-svg-core";

library.add(faGithub, faLinkedin);
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}