import React from 'libs/react';
import { useHistory } from 'libs/react-router-dom';

const NewButton = ({ color }) => {
  let history = useHistory();

  function handleClick() {
    history.push('/home');
  }

  return <button onClick={handleClick}>NEW SPECIAL BUTTON with color {color}</button>;
};

export default NewButton;
