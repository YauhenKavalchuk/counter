import styles from './count.module.scss';

export const Count = ({ value = '' }) => (
  <strong className={styles.count}>{value.length}</strong>
);
