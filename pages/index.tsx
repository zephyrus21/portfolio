import type { NextPage } from "next";
import Head from "next/head";
import { Header, About, Skills, Footer } from "../components";
import Layout from "../Layout";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Piyush Pandey</title>
        <meta name='description' content='Piyush Pandey Portfolio Website' />
        <meta property='og:title' content='Piyush Pandey' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='http://portfolio.piyushpandey.tech' />
        <meta
          property='og:image'
          content='https://raw.githubusercontent.com/zephyrus21/zephyrus21.github.io/main/Assets/head.png'
        />
        <meta
          property='og:description'
          content='Piyush Pandey Portfolio Website'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout>
        <Header />
        <About />
        <Skills />
        <Footer />
        {/* <section>Projects</section>
        <section>Contact</section>
        <footer>Footer</footer> */}
      </Layout>
    </>
  );
};

export default Home;
