import React, { FC } from "react";

import styles from "./textarea.module.scss";

type TextareaProps = {
  value: string,
  onChange: (e: string) => void,
}

export const Textarea:FC<TextareaProps> = ({ value, onChange }) => {

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>):void => {
    onChange(e.target.value);
  }

  return (
    <textarea
      className={styles.textarea}
      onChange={handleChange}
      value={value}
    />
  );
};
