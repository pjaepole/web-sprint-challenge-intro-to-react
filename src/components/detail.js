import react,{useState} from 'react'
import styled from 'styled-components';


export default function Detail(props){
    const [detailOn, setDetailOn]=useState(false);
    const toggleDetail=()=>{
        setDetailOn(!detailOn);
    }

    const StyledDetail= styled.div`
    display:flex;
    justify-content:flex-start;
    flex-direction:column;
    background-color:white;
    border: 1px solid black;
    
    `

    return(
    <StyledDetail>
        <button onClick={toggleDetail}> {detailOn? 'Hide': 'Detail'}  </button>
        {detailOn && <div>
                            <p>height:{props.props.character.height}</p>
                            <p>mass:{props.props.character.mass}</p>
                            <p>film:{props.props.character.films}</p>
                        </div>}
    </StyledDetail>
    )
        }
 