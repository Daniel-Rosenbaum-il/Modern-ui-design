import "./assets/styles/app.css";

import { Brand } from "./cmps/Brand";
import { Cta } from "./cmps/Cta";
import { Navbar } from "./cmps/Navbar";
import { Header } from "./containers/Header";
import { Footer } from "./containers/Footer";
import { Features } from "./containers/Features";
import { Possibility } from "./containers/Possibility";
import { WhatGPT3 } from "./containers/WhatGPT3";
import { Blog } from "./containers/Blog";

function App() {
  return (
    <div className="app">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
