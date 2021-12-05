import styles from './copy-button.module.scss';

export const CopyButton = ({ onClick }) => (
  <button className={styles.copyButton} onClick={onClick}>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    Copy Text
  </button>
);
