import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
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

      <section>About</section>
      <section>Skills</section>
      <section>Projects</section>
      <footer>Footer</footer>
    </>
  );
};

export default Home;
