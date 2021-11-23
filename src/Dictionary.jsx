import React, {useState} from "react";
import "./CSS/Dictionary.css";

export default function Dictionary(){
    const [keyword, setKeyword] = useState("");

    function search(event){
    event.preventDefault();
    alert(`Searching for ${keyword} definition`)   
    }

    function handleKeywordChange(event){
    setKeyword(event.target.value)
    }

    return (
       <div className="Dictionary">
        <form onSubmit={search}>
         <input type="search" autoFocus={true} onChange={handleKeywordChange}/>   
        </form>
       </div>
   )
}