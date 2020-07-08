import React, { Component } from 'react';
import Card from './components/Card/Card';
import './App.css';

class App extends Component {
  render() {
  return (
    <React.Fragment>
    <h1 className="text-center mt-3"><span role="img" aria-label="Joy">😂</span>Joke Jokes and more Jokes!!<span role="img" aria-label="Joy">😂</span></h1> 
    <Card />
    </React.Fragment>
  );
}
}
export default App;
