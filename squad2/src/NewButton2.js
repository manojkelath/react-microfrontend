import React from 'libs/react';
import { useHistory } from 'libs/react-router-dom';

const NewButton2 = () => {
  let history = useHistory();

  function handleClick() {
    history.push('/home');
  }

  return <button onClick={handleClick}>NEW SPECIAL BUTTON SQUAD 2</button>;
};

export default NewButton2;
