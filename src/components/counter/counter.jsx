import { useState } from "react";

import { Textarea } from '../textarea/textarea';
import { Count } from '../count/count';

export const Counter = ({ value, limit }) => {
  const [ text, setText ] = useState('');

  return (
    <>
      <Count value={text} />
      <Textarea value={text} onChange={setText} />
    </>
  );
}
