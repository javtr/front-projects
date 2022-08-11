import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ContactList from './components/container/contacto_list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <ContactList></ContactList>
        </div>
      </div>
    );
  }
}

export default App;
