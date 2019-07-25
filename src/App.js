import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';


class App extends Component {

  render() {

    return (
      <div className="App">
      <header className="App-header">
        <p>
          test app for push notifications
        </p>
        <button onClick={this.pingServer}>Ping server</button>
      </header>
    </div>
    );

  };

  pingServer() {
    console.log('pinging server...')
  };

}


  

export default App;