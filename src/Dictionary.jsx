import React, {useState} from "react";
import "./css/Dictionary.scss";
import axios from "axios";
import Results from "./Results";
import Rocket from "./media/rocket.png";
import {Link} from "react-router-dom";
import Photos from "./Photos";

export default function Dictionary(){
    const [keyword, setKeyword] = useState("earth");
    const [results, setResults] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [photos, setPhotos] = useState(null);

    function handleDictionaryResponse(response){
    setResults(response.data[0]);  
    }

    function handlePexelsResponse(response){
        setPhotos(response.data.photos);  
        }
    
    function search(){
    //documentation: https:dictionaryapi.dev/
    let apiUrl= `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    const apiKeyPexels="563492ad6f91700001000001a056dc5254ea491f9997b38e28da26bd"
    let apiUrlPexels = `https://api.pexels.com/v1/search?query=${keyword}&per_page=8`;
    const headers = {"Authorization": `Bearer ${apiKeyPexels}`};
    axios.get(apiUrlPexels, {headers: headers}).then(handlePexelsResponse);

    }

    function handleKeywordChange(event){
    setKeyword(event.target.value)
    }

    function load(){
        setLoaded(true);
        search();
    }

    if (loaded){
    return (
        <body>
       <div className="Dictionary">
           <div className="Top">
                <Link to="/" className="Back">
                    <h1 className="title" > Word Universe </h1>
                </Link>
                <div className="search-engine">
                    <form className="form" onSubmit={search}>
                        <input type="search" className="search-engine" autoFocus={true} onChange={handleKeywordChange} placeholder="Enter a word..."/>
                        <input type="image" alt="rocket" src={Rocket} className="rocket-buttom"/>
                    </form>
                </div>
            </div>
            <Results results={results} />
            <Photos photos={photos} />
            <footer className="Evanny" style={{color:"black;"}}>
           Coded by Évanny Guedes Belarmino
       </footer>
       </div>
       </body>
    );
    } else {
        load();
        return "Loading";
    }
}