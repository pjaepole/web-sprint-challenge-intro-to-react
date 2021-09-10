import styled from 'styled-components';
import React,{useState} from 'react'
import Detail from './detail';
export default function CharacterDetail(props){

   
        
      
    const StyledCharacterDetail=styled.div`
    color: #443e3e;
    border: 1px solid black;
    background-color:white;
    display:flex;
    flex-wrap:wrap;
    justify-content: space-between;
    margin-top: 4%;
    padding: 2%;
    `
   
    console.log('from characterDetail',props);
    return(
        <div>
        <StyledCharacterDetail>
                <li>{props.character.name}</li>
                <li>{props.character.birth_year}</li>                       
        </StyledCharacterDetail>
        <Detail props={props}/>
        </div>
    )





}