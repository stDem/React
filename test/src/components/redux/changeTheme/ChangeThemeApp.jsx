import React from 'react';
import { Provider } from'react-redux';
import store from './ChangeThemeStore';
import ChangeTheme from './ChangeTheme';


export default function ChangeThemeApp() {
  return (
    <div>
        <Provider store = {store}>
            <ChangeTheme/>
        </Provider>
    </div>
  )
}
