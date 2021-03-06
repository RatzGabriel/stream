import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

const PageOne = () => {
  return <div>PageOne</div>;
};

const PageTwo = () => {
  return <div>PageTwo</div>;
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={PageOne}></Route>
        <Route path="/pagetwo" component={PageTwo}></Route>
      </BrowserRouter>
    </div>
  );
};

export default App;
