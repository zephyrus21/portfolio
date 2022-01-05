import type { NextPage } from "next";
import Head from "next/head";
import { Header, About, Skills } from "../components";
import Layout from "../Layout";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Piyush Pandey</title>
        <meta name='description' content='Piyush Pandey Portfolio Website' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout>
        <Header />
        <About />
        <Skills />
        <section>Projects</section>
        <section>Contact</section>
        <footer>Footer</footer>
      </Layout>
    </>
  );
};

export default Home;
