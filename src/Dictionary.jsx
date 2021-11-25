import React, {useState} from "react";
import "./css/Dictionary.css";
import axios from "axios";

export default function Dictionary(){
    const [keyword, setKeyword] = useState("");

    function handleResponse(response){
    console.log(response.data[0]);   
    }

    function search(event){
    event.preventDefault();
    alert(`Searching for ${keyword} definition`)   

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
            </div>
       </div>
   )
}