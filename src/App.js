import React from 'react';
import logo from './logo.svg';
import './App.css';

import Dashboard from './Dashboard';
import Store from './Store';
import { Switch } from '@material-ui/core';
import Videoroom from './Videoroom';

function App() {
  return (
    <div className="App">
      <Store>
        <Videoroom />
        <Dashboard />
      </Store>
    </div>
  );
}

export default App;
