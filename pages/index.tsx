import type { NextPage } from "next";
import Head from "next/head";
import { NavBar, Header, About, Skills } from "../components";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Piyush Pandey Portfolio Website' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <NavBar />
        <Header />
      </main>

      <About />
      <Skills />
      <section>Projects</section>
      <section>Contact</section>
      <footer>Footer</footer>
    </>
  );
};

export default Home;
