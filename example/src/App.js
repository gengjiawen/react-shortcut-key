import React, { Component } from 'react';
import hotkey from 'react-shortcut-key'
import logo from './logo.svg';
import './App.css';

const componentOnHello = e => alert('Hello! You pressed CTRL + Enter!')
const componentOnBye = e => alert('Bye. You pressed CTRL + Esc.')

// Define shortcut key map.
const keymap = {
  hello: {
    key: 'enter',
    ctrl: true,
    alt: false,
    shift: false,
    meta: false,
    fn: componentOnHello
  },
  bye: {
    keyCode: 27,
    meta: true,
    fn: componentOnBye
  }
}

// Any component which will use shortcut keys
class HotKeyComponent extends React.Component {
  render () {
    return <div>Press "CTRL + Enter" or "CTRL + Esc" to alert messages.</div>
  }
}

// Inject the shortcut keys into the component
const ComponentWithHotkey = hotkey(keymap)(HotKeyComponent)

class App extends Component {
  render() {
    return (
      <div className="App">
        <button>hi</button>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ComponentWithHotkey/>
      </div>
    );
  }
}

export default App;
