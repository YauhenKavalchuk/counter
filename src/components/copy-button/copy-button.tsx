import { FC } from "react";

import styles from './copy-button.module.scss';

type CopyButtonProps = {
  onClick: () => void,
};

export const CopyButton:FC<CopyButtonProps> = ({ onClick }) => (
  <button className={styles.copyButton} onClick={onClick}>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    Copy Text
  </button>
);
