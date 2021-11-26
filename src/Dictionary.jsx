import React, {useState} from "react";
import "./css/Dictionary.css";
import axios from "axios";
import Results from "./Results";

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
           <h1 className="title"> Word Universe </h1>
            <div className="search-engine">
                <form className="form" onSubmit={search}>
                    <input type="search" autoFocus={true} onChange={handleKeywordChange} placeholder="Enter a word..."/>
                    <input type="submit" className="btn btn-primary" value="Let's Go!" />
                </form>
                <Results results={results} />
            </div>
            <footer className="Evanny" style="color: black;">
           Coded by Évanny Guedes Belarmino
       </footer>
       </div>
       
   )
}