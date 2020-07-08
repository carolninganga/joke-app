import React, { Component } from 'react';
import Card from './components/Card/Card';
import './App.css';
import API from './utils/API/API'
import Button from './components/Button/Button';

class App extends Component {
  state = {
    result: ''
  }

  componentDidMount() {
  API.getData()
  .then(res => this.setState({result: res.data.content}))   
  }

  handleClick = (event) => {
    event.preventDefault();
    API.getData()
    .then(res =>this.setState({result: res.data.content}))
    .catch(err => console.log(err));
  }

  render() {
  return (
    <React.Fragment>
    <h1 className="text-center mt-3"><span role="img" aria-label="Joy">😂😂😂</span>Joke Jokes and more Jokes!!<span role="img" aria-label="Joy">😂😂😂</span></h1> 
    <Card />
    <Button />
    </React.Fragment>
  );
}
}
export default App;
