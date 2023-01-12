import REACT from 'react';

export function About(props){
    return(
       <aside>
        <img src={props.image} alt={props.name}/>
       </aside>
    )
}