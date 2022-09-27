import React from "react";
import "./App.css";
import Header from "./Header";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <Header onToggle={() => ({})} theme="light" />
      <Search onChange={() => ({})} placeHolder="Rechercher un film..." />
    </div>
  );
}

export default App;
