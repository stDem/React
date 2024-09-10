import { create } from '@mui/material/styles/createTransitions';
import React from 'react';
import { useState } from 'react';
import { useContext } from "react";
import { createContext } from "react";

const ThemeContext = createContext();
const NotesContext = createContext();

const useTheme = ()=> useContext(ThemeContext);
const useNotes = ()=> useContext(NotesContext);

// component that display notes list
const NotesList = ()=>{
    const {notes} = useNotes();
    return(
        <ul>
            {notes.map((note,index)=>(
                <li key={index}>{note}</li>
            ))}
        </ul>
    );
};

// component that allows to add notes
const NoteInput = ()=>{
    const [inputValue, setInputValue] = useState('');
    const {addNote} = useNotes();

    const handleInputChange = (event)=>{
        setInputValue(event.target.value);
    };

    const handleAddNote=()=>{
        addNote(inputValue);
        setInputValue('');
    };

    return(
        <div>
            <input value={inputValue} onChange={handleInputChange}/>
            <betton onClick={handleAddNote}>Add</betton>
        </div>
    );
};

// component to switch theme
const ThemeToggle = ()=>{
    const {theme, toggleTheme} = useTheme();
    return(
        <button onClick={toggleTheme}>Push to switch theme on {theme==='light'?'dark':'light'}</button>
    );
};


export default function NotesContexts() {
    const [theme, setTheme] = useState('light');
    const [notes, setNotes] = useState(['Note 1','Note 2']);

    const toggleTheme=()=>setTheme((currentTheme)=>(currentTheme==='light'?'dark':'light'));
    const addNote=(note)=>setNotes((prevNotes)=>[...prevNotes, note]);
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
        <NotesContext.Provider value={{notes, addNote}}>
            <div className='content' style={{color: theme==='light'?'black':'white', background: theme==='light'?'white':'black'}}>
                <h1>List</h1>
                <ThemeToggle/>
                <NotesList/>
                <NoteInput/>
            </div>

        </NotesContext.Provider>

    </ThemeContext.Provider>
  )
};
