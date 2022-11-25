import React from "react";
import HomeLayoutHOC from "./HOC/Home.Hoc";
import Temp from "./Components/Temp";
import Master from './Components/master'

function App() {
  return (
    <>
      <HomeLayoutHOC exact path='/' component={Temp} />
      <HomeLayoutHOC exact path='/:type' component={Master} />
    </>
  );
}

export default App;
