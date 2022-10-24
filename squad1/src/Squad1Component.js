import React, { useState } from 'libs/react';
import { useHistory } from 'libs/react-router-dom';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
  Input
} from 'libs/@chakra-ui/react';


const Squad1Component = ({ squadData, callParent }) => {

  const [input, setInput] = useState('');
  const handleInputChange = (e) => setInput(e.target.value);

  const handleSubmit = () => {
    callParent(input);
  }


  return (
    <>
      <FormControl >
        <FormLabel>Email</FormLabel>
        <Input type='email' value={input} onChange={handleInputChange} />

      </FormControl>
      <br />
      <Button onClick={handleSubmit}>Submit Email!</Button>
    </>



  );
};

export default Squad1Component;
