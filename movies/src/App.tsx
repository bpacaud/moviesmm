import React from "react";
import "./App.css";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header onToggle={() => ({})} theme="light" />
    </div>
  );
}

export default App;
