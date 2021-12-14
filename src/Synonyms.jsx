import React from "react";
import "./css/Synonyms.scss";
import {Link} from "react-router-dom";


export default function Synonyms(props){

    if (props.synonyms){

        
        return ( 
            <ul className="Synonyms">
                {props.synonyms.map(function (synonym, index) {  
                    return (
                        <li key={index} >
                            <button>
                                {synonym}
                            </button>
                         </li>
                    )            
                })}

            </ul>
        )

    } else {
        return null;
    }
};