import { useState } from "react";

import { Textarea } from "../textarea/textarea";

export const Counter = ({ value, limit }) => {
  const [ text, setText ] = useState('');

  return (
    <Textarea value={text} onChange={setText} />
  );
}
