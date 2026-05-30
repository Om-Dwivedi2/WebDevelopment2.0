import React from "react";
import Section1 from "./components/Section1";
import Header from "./components/Header";
import About from "./components/About";

const App = () => {
  return (
    <main className="px-4">
      <Header />
      <Section1 />
      <About/>
    </main>
  );
};

export default App;
