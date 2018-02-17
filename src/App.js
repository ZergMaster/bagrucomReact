import React, { Component } from 'react';
import './App.css';
import HeaderMenu from './components/HeaderMenu/HeaderMenu';
import { ItemsList } from './components/ItemsList/ItemsList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderMenu></HeaderMenu>
        <ItemsList></ItemsList>
      </div>
    );
  }
}

export default App;