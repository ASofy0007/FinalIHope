import React from "react";
import "./App.css";
import { useState } from "react";

import { Header, Footer, Soup, Lista, ControlPanel } from "./components";

function App() {
  const [gameIniciou, setGameIniciou] = useState(false);

  const handleGameStart = () => {
    if (gameIniciou) {
      console.log("Termina Jogo");
      setGameIniciou(false);
    } else {
      console.log("Inicia Jogo");
      setGameIniciou(true);
    }
  };

  return (
    <div id="container">
      <Header />
      <main className="main-content">
        <ControlPanel gameStarted={gameIniciou} onGameStart={handleGameStart} />
        <Lista />
        <Soup />
      </main>
      <Footer />
    </div>
  );
}

export default App;
