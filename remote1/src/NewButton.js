import React from 'libs/react';
import { useHistory } from 'libs/react-router-dom';

const NewButton = () => {
  let history = useHistory();

  function handleClick() {
    history.push('/home');
  }

  return <button onClick={handleClick}>NEW SPECIAL BUTTON</button>;
};

export default NewButton;
