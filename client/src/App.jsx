import React from "react";
import HomeLayoutHOC from "./HOC/Home.Hoc";
import Temp from "./Components/Temp";

function App() {
  return (
    <HomeLayoutHOC exact path='/' component={Temp} />
  );
}

export default App;
