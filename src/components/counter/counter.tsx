import { useState, FC } from "react";

import { Textarea } from "components/textarea";
import { Count } from "components/count";
import { CopyButton } from "components/copy-button";

import styles from "./counter.module.scss";

export const Counter:FC = () => {
  const [ text, setText ] = useState('');

  const handleCopy = ():void => {
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      <header className={styles.header}>
        <Count value={text} />
        <CopyButton onClick={handleCopy} />
      </header>
      <section className={styles.section}>
        <Textarea value={text} onChange={setText} />
      </section>
    </>
  );
}
