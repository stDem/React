import { useState } from "react";

function TextInput() {
    const [text, setText] = useState('')

    const addText = (event) => {
        setText(event.target.value);
    }


    return ( 
        <div>
            <p>{text}</p>
            <input type="text" onChange={addText}/>
        </div>
     );
}

export default TextInput;