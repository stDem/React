import { useEffect, useState } from "react";

function InputForm() {
    const [inputValue, setInputValue] = useState('')
    const [submittedValue, setSubmittedValue] = useState('')

    useEffect(() => {
        console.log('Input Value: ', inputValue);
    }, [inputValue])
    

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmittedValue(inputValue);
        setInputValue('');    
    }

    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                
                <button type="submit">Submit</button>
            </form>
            {submittedValue && <p>Submitted Value: { submittedValue}</p>}
        </div>
     );
}

export default InputForm;