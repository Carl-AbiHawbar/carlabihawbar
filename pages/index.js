import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Will you go to prom with me?</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Will you go to prom with me?
        </h1>

        <p className={styles.description}>
          Hey [Partner's Name], 
        </p>
        <p className={styles.description}>
          I've been wanting to ask you this for a while now, and I couldn't think of a better way than to create a web page! 
        </p>
        <p className={styles.description}>
          Will you do me the honor of being my prom date?
        </p>

        <div className={styles.buttonContainer}>
          <button className={`${styles.button} ${styles.yesButton}`}>
            Yes
            <div className={styles.confetti}>
              <div className={styles.confettiPiece1}></div>
              <div className={styles.confettiPiece2}></div>
              <div className={styles.confettiPiece3}></div>
              <div className={styles.confettiPiece4}></div>
              <div className={styles.confettiPiece5}></div>
            </div>
          </button>
          <button className={`${styles.button} ${styles.noButton}`}>
            No
          </button>
        </div>

        <div className={styles.animationContainer}>
          <img className={styles.animation} src="/couple_dancing.gif" alt="Couple Dancing" />
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Powered by Mj's Bf</p>
      </footer>
    </div>
  )
}
