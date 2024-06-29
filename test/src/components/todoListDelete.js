import React from 'react'
import { useState } from "react";
import { TextField, Button, List, ListItem, ListItemText, IconButton, Card, CardContent } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';


export default function TodoListDelete() {
    const [todos, setTodos] = useState([]);
    // state for store current input in an input field
    const [currentTodo, setCurrentTodo] = useState('')
    const addTodo = (event) => {
        event.preventDefault(); // prevent form reloading
        if (!currentTodo.trim()) return; // ignore empty lines
        setTodos([...todos, currentTodo]); // add current todo in the todos list
        setCurrentTodo(''); // clean text field
    };
    // text field change handler
    const handleInputChange = (event) => {
        setCurrentTodo(event.target.value);
    };

    const deleteList = (index) => {
        const updateComments = todos.filter((_, i) => i !== index);
        setTodos(updateComments);
    };

    return ( 
        <div>
            <form onSubmit={addTodo}>
                
                <h3>Task 2</h3>

                <TextField
                    label="Add Task"
                    variant="outlined"
                    fullWidth
                    value={currentTodo}
                    onChange={(e) => setCurrentTodo(e.target.value)}
                    />
                    <button type="submit">Add</button>
                <List>
                    {todos.map((todo, index) => (
                        <Card key={index} variant="outlined" sx={{ mb: 1 }}>
                        <CardContent>
                            <ListItem
                            secondaryAction={
                                <IconButton edge="end" aria-label="delete" onClick={() => deleteList(index)}>
                                <DeleteIcon />
                                </IconButton>
                            }
                            >
                            <ListItemText primary={todo} />
                            </ListItem>
                        </CardContent>
                        </Card>
                    ))}
                </List>
            </form>
            
        </div>
     );
}
