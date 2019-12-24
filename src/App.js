import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
    {name: 'Max', age: 28},
    {name: 'manu', age: 30},
    {name: 'Jessica', age: 26}
    ],
    otherState: 'Some Other state'
  }
  switchNameHandler = (newName) => {
    //console.log('Was clcked')
    // this.state.persons[0].name = 'Vidur Punj';
    this.setState({
      persons: [
        {name: newName, age: 30},
        {name: 'Chetan Punj', age: 31},
        {name: 'Shorya Punj', age: 1}
      ]
    })
  }

  nameChangeHandler =(event) => {
    this.setState({
      persons: [
        {name: event.target.value, age: 46},
        {name: 'Shikher pur', age: 30},
        {name: 'Naina', age: 28},
      ]
    })
  }

  render() {
    return (
       <div className="App">
         <h1>Hi I am using React App </h1>
         <button onClick={this.switchNameHandler.bind(this, 'Mast Punj')}>Switch Name</button>
         <button onClick={() => this.switchNameHandler('Master Punj !!')}>Switch Name !!</button>
        <Person 
         name={this.state.persons[0].name}
         age={this.state.persons[0].age}
         click={this.switchNameHandler.bind(this, 'Manu Punj')}>My Hobbies are: Study</Person>
        <Person 
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          change={this.nameChangeHandler}/>
        <Person 
         name={this.state.persons[2].name}
         age={this.state.persons[2].age}
         click={this.switchNameHandler.bind(this, 'Mr Sunil Raj Sharma')} />
      </div>
    );
   //  return React.createElement('div', {className: 'App'} ,React.createElement('h1', null, 'Hi, I\'m using React App') )
  }
}

export default  App;
