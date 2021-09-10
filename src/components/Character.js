import CharacterDetail from "./CharacterDetail";
import Detail from '../components/detail';
import styled from 'styled-components';
// Write your Character component here
export default function Character(props){
    
const {characters}=props;
console.log(props.characters);


    const StyledCharacters=styled.div`
   
    `

    return(
        <StyledCharacters>
            
            {characters.map(character=>{               
               
                return <CharacterDetail character={character} key={character.birth_year} />
            })}
            
         

        </StyledCharacters>

    )


}