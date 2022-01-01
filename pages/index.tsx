import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Piyush Pandey Portfolio Website' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>Piyush Here!!!</main>
    </>
  );
};

export default Home;
