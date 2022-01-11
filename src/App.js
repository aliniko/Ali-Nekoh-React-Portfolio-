import React from "react";

import {
  Footer,
  Blog,
  Possibility,
  Features,
  Header,
  WhatAli,
  WhatNekoh
} from "./containers";
import { CTA, Brand, Navbar } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatAli />
      <WhatNekoh />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
