// Write your Character component here







export default function Character(props){
    
const {characters}=props;
console.log(props.characters);


    return(
        <div>
            {characters.map(character=>{
                return <div>{character.name}</div>
            })}
        </div>

    )


}