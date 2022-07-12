import React from 'react';
import './App.css';
import People from './components/people/people';
import { Provider } from "react-redux";
import store from './components/redux/store';

function App() {
  return (
    <Provider store={store}>
      <People />
    </Provider>
  );
}

export default App;
