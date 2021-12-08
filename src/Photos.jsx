import React from "react";
import "./css/Photos.scss";

export default function Photos(props){
    if(props.photos){
        return (
            <section className="Photos">
                        <div className="a-lot-photos" >
                        <img src={props.photos[0].src.landscape} alt="photos" className="first" />
                        <img src={props.photos[1].src.landscape} alt="photos" className="second" />
                        <img src={props.photos[2].src.landscape} alt="photos" className="third" />
                        <img src={props.photos[3].src.landscape} alt="photos" className="fourth" />
                        <img src={props.photos[4].src.landscape} alt="photos" className="fifth" />
                        <img src={props.photos[5].src.landscape} alt="photos" className="sixth" />
                        <img src={props.photos[6].src.landscape} alt="photos" className="seventh" />
                        <img src={props.photos[7].src.landscape} alt="photos" className="eighth" />
                         </div>
            </section>
        )
    } else {
        return null;
    }
    
}