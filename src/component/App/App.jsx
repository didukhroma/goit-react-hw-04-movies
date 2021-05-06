import { Component } from 'react';
import AppBar from '../AppBar';
import Router from '../Router/Router';

class App extends Component {
  render() {
    return (
      <>
        <AppBar />
        <Router />
      </>
    );
  }
}

export default App;
