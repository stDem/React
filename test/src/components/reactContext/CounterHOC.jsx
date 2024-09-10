import React from 'react';
import { useState } from 'react';


// HOC for adding counter to component
const withCounter = (WrappedComponent) =>{
    return(props)=>{
        const [count, setCount] = useState(0);

        const incrementCount=()=>setCount(count+1);
        const newProps = {count, incrementCount, ...props};

        return <WrappedComponent {...newProps}/>;
    };
};

const ClickCounter = ({count, incrementCount, message})=>{
    return(
        <div>
            <p>{message}</p>
            <button onClick={incrementCount}>+1</button>
            <p>Clicked {count} times</p>
        </div>
    );
};

// use HOC to add counter to component ClickCounter and pass other props
const ClickCounterWithCounterAndProps = withCounter(ClickCounter);

export default function CounterHOC() {
  return (
    <div>
        <h1>Example of using HOC with other props</h1>
        <ClickCounterWithCounterAndProps message='Click Counter: '/>
        <ClickCounterWithCounterAndProps message='Click New Counter: '/>
    </div>
  );
};


