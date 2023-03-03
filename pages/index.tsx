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
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias culpa
          eos ipsam autem dicta molestiae, perspiciatis deleniti aut possimus
          iusto amet excepturi cumque placeat, nisi ut dolore quisquam, et
          numquam?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias culpa
          eos ipsam autem dicta molestiae, perspiciatis deleniti aut possimus
          iusto amet excepturi cumque placeat, nisi ut dolore quisquam, et
          numquam?
        </p>
        <SyntaxHighlighter code={code} language="jsx" lineHighlights={[2, 4]} />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias culpa
          eos ipsam autem dicta molestiae, perspiciatis deleniti aut possimus
          iusto amet excepturi cumque placeat, nisi ut dolore quisquam, et
          numquam?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias culpa
          eos ipsam autem dicta molestiae, perspiciatis deleniti aut possimus
          iusto amet excepturi cumque placeat, nisi ut dolore quisquam, et
          numquam?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias culpa
          eos ipsam autem dicta molestiae, perspiciatis deleniti aut possimus
          iusto amet excepturi cumque placeat, nisi ut dolore quisquam, et
          numquam?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias culpa
          eos ipsam autem dicta molestiae, perspiciatis deleniti aut possimus
          iusto amet excepturi cumque placeat, nisi ut dolore quisquam, et
          numquam?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias culpa
          eos ipsam autem dicta molestiae, perspiciatis deleniti aut possimus
          iusto amet excepturi cumque placeat, nisi ut dolore quisquam, et
          numquam?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias culpa
          eos ipsam autem dicta molestiae, perspiciatis deleniti aut possimus
          iusto amet excepturi cumque placeat, nisi ut dolore quisquam, et
          numquam?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias culpa
          eos ipsam autem dicta molestiae, perspiciatis deleniti aut possimus
          iusto amet excepturi cumque placeat, nisi ut dolore quisquam, et
          numquam?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias culpa
          eos ipsam autem dicta molestiae, perspiciatis deleniti aut possimus
          iusto amet excepturi cumque placeat, nisi ut dolore quisquam, et
          numquam?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias culpa
          eos ipsam autem dicta molestiae, perspiciatis deleniti aut possimus
          iusto amet excepturi cumque placeat, nisi ut dolore quisquam, et
          numquam?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias culpa
          eos ipsam autem dicta molestiae, perspiciatis deleniti aut possimus
          iusto amet excepturi cumque placeat, nisi ut dolore quisquam, et
          numquam?
        </p>
        <SyntaxHighlighter code={code} language="jsx" lineHighlights={[2, 4]} />
      </main>
    </div>
  );
};

export default Component;
