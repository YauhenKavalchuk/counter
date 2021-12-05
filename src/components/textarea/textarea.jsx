export const Textarea = ({ value, onChange }) => {

  const handleChange = (e) => {
    onChange(e.target.value);
  }

  return (
    <textarea
      onChange={handleChange}
      value={value}
    />
  );
};
