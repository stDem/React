import React from 'react'

export default function Loading({isLoading}) {
  return (
    <>
        {isLoading && (
            <h2>Loading ...</h2>
        )}
        {!isLoading && <h2>Loading End</h2>}
    </>
  );
};
