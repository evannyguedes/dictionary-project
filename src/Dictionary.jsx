import React, {useState} from "react";
import "./css/Dictionary.scss";
import axios from "axios";
import Results from "./Results";
import Rocket from "./media/rocket.png";
import {Link} from "react-router-dom";

export default function Dictionary(){
    const [keyword, setKeyword] = useState("");
    const [results, setResults] = useState(null);

    function handleResponse(response){
    setResults(response.data[0]);  
    }

    function search(event){
    event.preventDefault();  
    
    //documentation: https:dictionaryapi.dev/
    let apiUrl= `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event){
    setKeyword(event.target.value)
    }

    return (
       <div className="Dictionary">
           <Link to="/" className="Back">
           <h1 className="title"> Word Universe </h1>
           </Link>
            <div className="search-engine">
                <form className="form" onSubmit={search}>
                    <input type="search" autoFocus={true} onChange={handleKeywordChange} placeholder="Enter a word..."/>
                    <input type="image" alt="rocket" src={Rocket} className="rocket-buttom"/>
                </form>
                <Results results={results} />
            </div>
            <footer className="Evanny" style={{color:"black;"}}>
           Coded by Évanny Guedes Belarmino
       </footer>
       </div>
       
   )
}