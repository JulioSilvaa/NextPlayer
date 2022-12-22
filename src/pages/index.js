import { Inter } from "@next/font/google";
import Head from "next/head";
import Player from "../components/Player";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="Player de vídeo" content="Criado por Julio usando NextJS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>conteudo Main</h1>
        <Player />
      </main>
    </>
  );
}
