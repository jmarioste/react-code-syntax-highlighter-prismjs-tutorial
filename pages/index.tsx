import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import SyntaxHighlighter from "../components/SyntaxHighlighter";

const Component = () => {
  const code = `
<div className={styles.container}>
  <main>
    Hello,world
  </main>
</div>`;
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {Array.from(new Array(200).keys()).map((i) => {
          return (
            <div key={i}>
              <p style={{ height: 100 }}>Lorem ipsum</p>
              <SyntaxHighlighter
                code={code}
                language="jsx"
                lineHighlights={[2, 4]}
              />
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default Component;
