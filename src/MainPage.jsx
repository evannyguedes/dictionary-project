import "./css/MainPage.css";
import {Link} from "react-router-dom";
import Universe from "./media/universe.mp4";
import Rocket from "./media/rocket.png";

export default function MainPage() {
    return (
      <div className="MainPage">
        <video autoPlay loop muted className="Universe">
          <source src={Universe} type="video/mp4" />
        </video>
        <header className="Header">
          <h3 className="Welcome">Welcome to the</h3>
          <h1 className="Word">Word Universe</h1>
          
          <Link to="/dictionary" className="Go">
          <input type="image" alt="rocket" src={Rocket} className="Rocket"/>
          <br/>
            Let's Go!</Link>
        </header>
        <footer className="Bottom">
          Coded by Évanny Guedes Belarmino
        </footer>
      </div>
    );
  }