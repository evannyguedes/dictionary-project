import "./css/MainPage.css";
import {Link} from "react-router-dom";

export default function MainPage() {
    return (
      <div className="MainPage">
        <header className="header">
          <h3>Welcome to the</h3>
         <h1>Word Universe</h1>
          <Link to="/dictionary">Let's Go!</Link>
        </header>
        <footer className="bottom">
          Coded by Évanny Guedes Belarmino
        </footer>
      </div>
    );
  }