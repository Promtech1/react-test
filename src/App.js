import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import { Component } from 'react';
import BindHandlers from './components/BindHandlers';
import Parent from './components/Parent';
import UserGreeting from './components/UserGreeting';


class App extends Component {
  render() {
    return (
      <div className="App">
        <UserGreeting />
      </div>

    );
  }
}

export default App;
