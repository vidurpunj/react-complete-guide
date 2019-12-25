import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import person from './Person/Person';
// import UserInput from './UserInput/UserInput';
// import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    persons: [
    {id: 1, name: 'Max', age: 28},
    {id: 2, name: 'manu', age: 30},
    {id: 3, name: 'Jessica', age: 26}
    ],
    otherState: 'Some Other state',
    username: 'Super Vidur Punj',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // this.state.persons[0].name = 'Vidur Punj';
    this.setState({
      persons: [
        {name: newName, age: 30},
        {name: 'Chetan Punj', age: 31},
        {name: 'Shorya Punj', age: 1}
      ]
    })
  }

  usernameChangedHandinler = (event) => {
    this.setState({
      username: event.target.value
    });
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

  togglePersonshandler = () => {
    const doesShow = this.state.showPersons;
    console.log(doesShow);
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons;
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
     this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
      const personIndex = this.state.persons.findIndex(p => { 
        return p.id === id;
      })
      const person = {
        ...this.state.persons[personIndex] 
      }
      console.log('Reached');
      person.name = event.target.value;
      const persons = [...this.state.persons];
      persons[personIndex] = person;
      this.setState({
        persons: persons
      })
  }
  
  render() {
    
    const style = {  
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

      let persons = null;
      if (this.state.showPersons){
          persons = (
            <div>
                {
                  this.state.persons.map((person, index) => {
                    return <Person
                      name={person.name}
                      age={person.age}
                      click={this.deletePersonHandler.bind(index)}
                      key={person.id}
                      onchanged={(event) => this.nameChangedHandler.bind(event, person.id)}
                      />
                  })
                }
              {/* <Person
                name={this.state.persons[0].name}
                age={this.state.persons[0].age}
                click={this.switchNameHandler.bind(this, 'Manu Punj')}>My Hobbies are: Study</Person>
              <Person
                name={this.state.persons[1].name}
                age={this.state.persons[1].age}
                change={this.nameChangeHandler} />
              <Person
                name={this.state.persons[2].name}
                age={this.state.persons[2].age}
                click={this.switchNameHandler.bind(this, 'Mr Sunil Raj Sharma')} /> */}
            </div>
          )
      } 

    return (
       <div className="App">
         <h1>Hi I am using React App </h1>
         {/* <button style={style} onClick={this.switchNameHandler.bind(this, 'Mast Punj')}>Switch Name</button> */}
         {/* <button onClick={() => this.switchNameHandler('Master Punj !!')}>Switch Name !!</button> */}
         <button style={style} onClick={this.togglePersonshandler}>Switch Name !!</button>
        { persons }
          {/* {
           this.state.showPersons ? 
              <div>
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
              </div> : null
          }
           */}
          {/* <ol>
            <li>create two components UserInput and UserOutput</li>
            <li>User Input should hold an input element, Userout two paragraphs</li>
            <li>Output multiple components in the App component (any paragraphs text of your choice)</li>
            <li>Pass a username (of you choice) to the UserOutput via props and display there</li>
            <li>Add state of the App component (=> username) and pass the username to the UserOutput component</li>
            <li>Add a method to manipulate the state ( => an event handler method)</li>
            <li>pass the event-handler method to reference to reference to the UserInput componet and bind it to the input-change event</li>
            <li>Ensure that the new input entered by the user overwrites the old username and password to userOutput</li>
            <li>Add the two-way-binding to your input (in UserInput) to also display the starting username</li>
            <li>Add styling of your choice to your components/elements in the components both with inline styles and stylesheets</li>
            <UserInput changed={this.usernameChangedHandinler} currentName={this.state.username}></UserInput>
            <UserOutput userName="Vidur Punj"></UserOutput>
            <UserOutput userName={this.state.username}></UserOutput>
          </ol> */}
      </div>

    );
   //  return React.createElement('div', {className: 'App'} ,React.createElement('h1', null, 'Hi, I\'m using React App') )
  }
}

export default  App;
