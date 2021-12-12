import { FC } from "react";

import styles from './count.module.scss';

type CountProps = {
  value?: string,
};

export const Count:FC<CountProps> = ({ value = '' }) => (
  <strong className={styles.count}>{value.length}</strong>
);
