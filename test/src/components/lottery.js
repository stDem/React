// import React from 'react'
import * as React from 'react';
import Box from '@mui/material/Box';
import { TextField, Button} from '@mui/material';
import { useState } from "react";

export default function Lottery() {
    const [output, setOutput] = useState('');
  
    const handleOutputChange = (e) => {
      e.preventDefault();
      let value = e.target.value;
    //   setInput(value);
      let sum = 0;
      const dollars = [100, 20, 10, 5, 1];
      function getSum(value, dollar){
            while (value !==0){
                if (value%dollar===0){
                    sum++;
                    value-=dollar;
                    getSum(value, dollar);
                }
                else{
                    dollars = dollars.splice(0);
                    getSum(value, dollars[0]);
                }
            };
            setOutput(sum);
            console.log(sum)
        };
      if (value !== '' && value >= 1 && value <= 100000000000) {
        getSum(value, dollars[0]);
      } else {
        setOutput('');
      }
    };

  return (
    <div className='lottery_component'>
      <Box
        component="form"
        sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        >
          <div >
            <label for="input">Input</label>
            <TextField id="input" label="Input" variant="outlined" type="number" />
          </div>
          <div>
            <label for="output">Output</label>
            <TextField id="output" label="Output" variant="outlined" value={output} type="number" />
          </div>
      </Box>
      <Button onClick={handleOutputChange} variant="outlined">Show sum</Button>
    </div>
  )
}


