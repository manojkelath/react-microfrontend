import React from 'libs/react';
import { useHistory } from 'libs/react-router-dom';

const NewButton2 = ({ callParent }) => {
  let history = useHistory();

  function handleClick() {
    callParent('RED');
  }

  return <button onClick={handleClick}>NEW SPECIAL BUTTON SQUAD 2</button>;
};

export default NewButton2;
