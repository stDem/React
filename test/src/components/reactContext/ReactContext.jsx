import React from 'react';
import { useContext } from "react";
import { createContext } from "react";

// create context
const MessageContext = createContext();

// component GrandGrandGrandChild uses context
function GrandGrandGrandChild() {
// use useContext to access content
    const message = useContext(MessageContext);

    return <span>{message}</span>;
};

// GrandParent component sets context
function GrandParent() {
    return ( 
        <MessageContext.Provider value="Hello from the top context!">
            <Parent/>
        </MessageContext.Provider>
     );
};

// Parent component passes context via props
function Parent() {
    return <Child/>;
};

// Parent component passes context next
function Child() {
    return <GrandChild/>;
};

// GrandChild component passes context to the last level
function GrandChild() {
    return <GrandGrandGrandChild/>;
};


// root component
function ReactContext() {
    return ( 
        <div>
            <h1>Example of using React.Context</h1>
            <GrandParent/>
        </div>
     );
}

export default ReactContext;






