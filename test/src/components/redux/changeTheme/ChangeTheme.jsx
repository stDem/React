import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

export default function ChangeTheme() {
    const theme = useSelector(state=>state);
    const dispatch = useDispatch();

    const changeTheme =()=>{
        dispatch({type:'TOGGLE_THEME'});
    };
    

  return (
    <div style={theme===true?{background: 'white', color: 'black'}:{background: 'blue', color: 'white'}}>
        <h1>Homework 5 - Toggle Theme</h1>
        <button onClick={changeTheme}>Change Theme on {theme===true?`${'dark'}`:`${'light'}`}</button>
    </div>
  );
};
