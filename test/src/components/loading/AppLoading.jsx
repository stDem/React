import React from 'react'
import { useState } from 'react';
import Loading from './Loading'

const withLoadingIndicator = (Component, isLoading)=>{
    return (props)=>{
        const newProps ={
            ...props,
            isLoading,
        };
        return <Component {...newProps}/>;
    };
};

export default function AppLoading() {
    const [isLoading, setIsLoading] = useState(true);
    const NewLoading = withLoadingIndicator(Loading, isLoading);

    setTimeout(() => {
        setIsLoading((prev)=>!prev);
    }, 3000);


  return (
    <>
        <NewLoading/>
    </>
  );
};
