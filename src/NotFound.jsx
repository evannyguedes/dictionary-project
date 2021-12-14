import React from "react";
import NotFoundImg from "./media/404.gif";
import "./css/NotFound.scss";

export default function NotFound(){
    return(
      <img  src={NotFoundImg} className="NotFound"/> 
    )
}