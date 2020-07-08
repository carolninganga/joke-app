import React, { Component } from 'react';
import Card from './components/Card/Card';
import './App.css';

class App extends Component {
  render() {
  return (
    <React.Fragment>
      
    <Card result={this.state.result}/>
    </React.Fragment>
  );
}
}
export default App;
