import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import BlockButton from '../components/block/block';
import { useGlobalState } from '../state';

export default function Home() {
  const [score, setScore] = useGlobalState('score');
  const [incrementor, setIncrementor] = useState(1);
  const [autoIncrementor, setAutoIncrementor] = useGlobalState('autoIncrementor');

  useEffect(() => {
    if (autoIncrementor > 0) {
      const interval = setInterval(() => {
        setScore(prevScore => prevScore + autoIncrementor);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [autoIncrementor]);

  const handleClick = () => {
    setScore(score + incrementor);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Minecraft clicker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to Minecraft clicker!
        </h1>
        <BlockButton onClick={handleClick} />
        <p>Current score: {score}</p>
      </main>

      <footer>
        {/* Auto increment button removed */}
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
        .storeLink {
          margin-left: 20px;
          padding: 10px 20px;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 5px;
          text-decoration: none;
          cursor: pointer;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
