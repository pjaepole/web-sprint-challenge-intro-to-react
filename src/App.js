import React, {useState, useEffect} from 'react';
import './App.css';
import styled from 'styled-components';
import axios from 'axios';
import Characters from './components/Character';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters]=useState([]);
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const StyledApp=styled.div`
  display:flex;
  flex-direction:column;
  `

  useEffect(()=>{
axios.get('https://swapi.dev/api/people/?format=api')
.then(res=>{
  console.log('character',res.data);
  setCharacters(res.data);
  
}).catch(err=>console.error(err))
},[])


  return (
    <div className="App">
      <h1 className="Header">Characters from StarWars</h1>
      <Characters characters={characters}/>
     
    </div>
  );
}

export default App;
