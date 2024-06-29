// import React from 'react'
import * as React from 'react';
import Box from '@mui/material/Box';
import { TextField, Button} from '@mui/material';
import { useState } from "react";

export default function TemperatureConverter() {
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');
    const handleCelsiusChange = (e) => {
      e.preventDefault();
      const value = e.target.value;
      setCelsius(value);
      if (value !== '') {
        setFahrenheit(((parseFloat(value) * 9) / 5 + 32).toFixed(2));
      } else {
        setFahrenheit('');
      }
    };
  
    const handleFahrenheitChange = (e) => {
      e.preventDefault();
      const value = e.target.value;
      setFahrenheit(value);
      if (value !== '') {
        setCelsius(((parseFloat(value) - 32) * 5 / 9).toFixed(2));
      } else {
        setCelsius('');
      }
    };

  return (
    <div className='temperature_component'>
      <Box
        component="form"
        sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        >
          <div >
            <label for="C_temperature">Temperature in C</label>
            <TextField id="C_temperature" label="Temperature in C" variant="outlined"  value={celsius} onChange={handleCelsiusChange} type="number" />
          </div>
          <div>
            <label for="F_temperature">Temperature in F</label>
            <TextField id="F_temperature" label="Temperature in F" variant="outlined" value={fahrenheit} onChange={handleFahrenheitChange} type="number" />
          </div>
      </Box>
      <Button variant="outlined">Show temperature</Button>
    </div>
  )
}


