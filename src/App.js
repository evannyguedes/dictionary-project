import './CSS/App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Welcome to the</h3>
       <h1>Word Universe</h1>
       <a href="https://dictionary.cambridge.org/" className="btn btn-primary">
         Let's go!
       </a>
      </header>
      <main>
        <Dictionary />
        </main>
      <footer className="bottom">
        Coded by Évanny Guedes Belarmino
      </footer>
    </div>
  );
}


