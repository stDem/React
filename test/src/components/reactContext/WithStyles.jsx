import React from 'react';

// HOC (higher order component)
const withStyle = (WrappedComponent, styles)=>{
    return(props)=>{
        const newProps = {...props, styles};
        return <WrappedComponent {...newProps}/>;
    };
};

// component that will be wrapped in styles
const Button = ({styles})=>{
    return(
        <button style={styles}>Click me</button>
    );
};

const Text = ({styles})=>{
    return(
        <p style={styles}>Text</p>
    );
};

// use HOC to add styles to Button component
const StyledButton = withStyle(Button, {background: 'blue', color: 'white'});
const StyledButton2 = withStyle(Button, {background: 'green', color: 'white'});
const StyledText = withStyle(Text, {background: 'gray', color: 'black'});

export default function WithStyles() {
  return (
    <div>
        <h1>Higher Order Component (HOC) with functional components example</h1>
        <StyledButton/>
        <StyledButton2/>
        <StyledText/>
    </div>
  );
};


