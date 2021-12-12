import { useState } from "react";

import { Textarea } from '../textarea';
import { Count } from '../count';
import { CopyButton } from '../copy-button';

import styles from './counter.module.scss';

export const Counter = () => {
  const [ text, setText ] = useState('');

  const handleCopy = () => {
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
