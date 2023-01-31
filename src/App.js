import React, { useState, useEffect } from "react";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import "./styles/app.css"

function App() {
  //const [score, setScore] = useState(0);
  //const [highScore, setHighScore] = useState(0);

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
