import styles from './textarea.module.scss';

export const Textarea = ({ value, onChange }) => {

  const handleChange = (e) => {
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
