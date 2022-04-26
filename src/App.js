import React from 'react';
import { useState, useEffect } from "react";

import bio from './data/bio';
//import Stamp from './components/Stamp';
import Intro from './components/Intro';
import Footer from './components/Footer';

import './App.css';

function App() {
  //Keeps track of bio data, including which bio has been clicked
  const [popState, setPopState] = useState({});
  //I want to insert data from popState for just the clicked bio,
  //into popClicked
  const [popClicked, setpopClicked] = useState(null);
  //Boolean controls whether or not to display PopOut component,
  //based on popState
  const [display, setDisplay] = useState(false);

  //console.log(popState);
  //Is it a problem that I'm not using popState outside of a function ??

  function handleClick(name) { //Get name of bio that was clicked
    //Initially spread bio data onto bioState 
    const bioState = [...bio];
    //Map bioState onto popState
    //in order to compare clicked bio name with bioState name
    let popState = bioState.map(state => {
      if (state.name === name) {
        //If there's a match, flip the popShow state
        state.popShow = !state.popShow;
        console.log(this.state.name);
      }
      //Can I set popClicked to the clicked bio data ??
      //setpopClicked( ?? );

      //Return updated bioState
      return bioState;
    });
    //Set popState to updated bioState
    setPopState(bioState);
    //console.log(popState);
  };

  //When popClicked contains an object (clicked bio data),
  //set display to true
  useEffect(() => {
    if (popClicked) {setDisplay(true);}
    else {setDisplay(false);}
  }, [popClicked]);

  //Map bio for student bio grid => this should get rendered only once
  const Grid = bio.map((student) => (
    //Upon clicking a bio, call handleClick function and pass the name prop
    <div className="bio" onClick={() => {handleClick(student.name);}}>
      <img src={require('/src/assets/portraits/' + student.src)} alt={student.name}></img>
      <h3>{student.name}</h3>
    </div>
  ));

  //Does this function need to be wrapped inside useEffect
  //that watches display state ??
  function PopOut(props, popClicked) {
    const display = props.display;
    //Checks if display state is true
    //If true then return component with data from popClicked
    if (display) {
      return (
        <div className="pop">
          <button>X</button>
          <img src={require('/src/assets/portraits/' + popClicked.src)} alt={popClicked.name}></img>
          <h3>{popClicked.name}</h3>
          <img src={require('/src/assets/stills/' + popClicked.still)} alt={popClicked.title}></img>
          <p>{popClicked.info}</p>
        </div>
        //Else return empty div
    )} else {return (<div></div>)}
  };
  
  return (
    <div className="App">
      <header></header>
      <Intro />
      <PopOut display={display}/>
      {Grid}
      <Footer />
    </div>
  );
}

export default App;
