import { useState } from "react";

function TodoList() {
// state for storage todo list
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

    return ( 
        <div>
            <form onSubmit={addTodo}>
                <input type='text' value={currentTodo} onChange={handleInputChange} />
                <button type="submit">Add</button>
            </form>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li> // use index as a key
                ))}
            </ul>
        </div>
     );
}

export default TodoList;