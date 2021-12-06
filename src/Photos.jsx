import React from "react";
import "./css/Photos.scss";

export default function Photos(props){
    if(props.photos){
        return (
            <section className="Photos">
                <div className="row">
                {props.photos.map(function(photo, index){
                    return(
                        <div className="col-6" key={index}>
                            <a href={photo.src.original} target="_blank" rel="noreferrer">
                        <img src={photo.src.landscape} alt="photos" className="images" />
                        </a>
                        </div>
                    )
                })}
                </div>
            </section>
        )
    } else {
        return null;
    }
    
}