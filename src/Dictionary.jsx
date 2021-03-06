import React, {useState} from "react";
import "./css/Dictionary.scss";
import axios from "axios";
import Results from "./Results";
import Rocket from "./media/rocket.png";
import {Link} from "react-router-dom";
import {useLocation} from "react-router-dom";
import Photos from "./Photos";
import Linkedin from "./media/linkedin.png";
import Github from "./media/github.png";

export default function Dictionary(){
    const location = useLocation();
    const{word}= location.state
    const [keyword, setKeyword] = useState(word);
    const [results, setResults] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [photos, setPhotos] = useState(null);

    

    function handleDictionaryResponse(response){

    setResults(response.data[0]);  
    }

    function handlePexelsResponse(response){
        if (Object.keys(response.data.photos).length  !== 0)
        {
            setPhotos(response.data.photos);console.log(response.data.photos)
        }
          
        }
    
    function search(){
    //documentation: https:dictionaryapi.dev/
    let apiUrl= `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    const apiKeyPexels="563492ad6f91700001000001a056dc5254ea491f9997b38e28da26bd";
    let apiUrlPexels = `https://api.pexels.com/v1/search?query=${keyword}&per_page=8`;
    const headers = {"Authorization": `Bearer ${apiKeyPexels}`};
    axios.get(apiUrlPexels, {headers: headers}).then(handlePexelsResponse);

    }

    function handleSubmit(event){
        event.preventDefault();
        search();
    }

    function handleKeywordChange(event){
        setKeyword(event.target.value)
    }

    function load(){
        setLoaded(true);
        search();
    }

    function goLinkedin(){
        return window.open("https://www.linkedin.com/in/%C3%A9vanny-guedes-belarmino-971777123/", "_blank")}

    function goGitHub(){
        return window.open("https://github.com/evannyguedes/dictionary-project", "_blank")}

    if (loaded){
    return (
        
       <div className="Dictionary">
           <div className="Top">
                <Link to="/" className="Back">
                    <h1 className="title" > Word Universe </h1>
                </Link>
                <div className="search-engine">
                    <form className="form" onSubmit={handleSubmit}>
                        <input type="search" className="search-engine" autoFocus={true} onChange={handleKeywordChange} placeholder="Enter a word..."/>
                        <input type="image" alt="rocket" src={Rocket} className="rocket-buttom"/>
                    </form>
                </div>
            </div>
            <Photos photos={photos} />  
            <Results results={results}/>
            <footer className="Evanny" style={{color:"black;"}}>
                Coded by ??vanny Guedes Belarmino
                <input
                    type="image"
                    alt="Linkedin"
                    src={Linkedin}
                    className="sticker-lkd"
                    onClick={goLinkedin}
                />
                <input
                    type="image"
                    src={Github}
                    alt="Github"
                    className="sticker-git"
                    onClick={goGitHub}
                />
            </footer>
       </div>
       
    );
    } else {
        load();
        return "Loading";
    }
}