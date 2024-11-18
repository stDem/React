import {
  useState,
  useRef
} from "react"; 

export default function Calculator() { 
  const inputRef1 = useRef(null); 
  const inputRef2 = useRef(null); 

  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result = Number(inputRef1.current.value) + Number(inputRef2.current.value)); 
  }; 
 
  function minus(e) { 
  	e.preventDefault(); 
    setResult((result) => result = Number(inputRef1.current.value) - Number(inputRef2.current.value));  
  };
 
  function times(e) { 
    e.preventDefault(); 
    setResult((result) => result =Number(inputRef1.current.value)* Number(inputRef2.current.value)); 
  }; 
 
  function divide(e) { 
    e.preventDefault(); 
    setResult((result) => result = Number(inputRef1.current.value) / Number(inputRef2.current.value));  
  };
 
  function resetInput(e) { 
    e.preventDefault(); 
    inputRef1.current.value = null;
    inputRef2.current.value = null;
  }; 
 
  function resetResult(e) { 
  	e.preventDefault(); 
    setResult(0); 
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}> 
          Result: {result} 
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef1} 
          type="number" 
          placeholder="Type a number1" 
        /> 
        <input
          pattern="[0-9]" 
          ref={inputRef2} 
          type="number" 
          placeholder="Type a number2" 
        /> 
        <button onClick={plus}>add</button>
        <button onClick={minus}>subtract</button> 
        <button onClick={times}>multiply</button> 
        <button onClick={divide}>divide</button> 
        <button onClick={resetInput}>resetInput</button> 
        <button onClick={resetResult}>resetResult</button>  
      </form> 
    </div> 
  ); 
} 
 
