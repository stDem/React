import React from 'react';
import { Provider } from'react-redux';
import Counter from './Counter';
import store from './CounterStore';


export default function CounterApp() {
  return (
    <div>
        <Provider store = {store}>
            <Counter/>
        </Provider>
    </div>
  )
}
