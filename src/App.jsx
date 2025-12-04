import React from "react";
import NavBar from "./component/NavBar";
import Hero from "./component/Hero";
import ProductViewer from "./component/ProductViewer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Showcase from "./component/Showcase";
import Performance from "./component/Performance";
import Features from "./component/Features";
import Highlights from "./component/Highlights";
import Footer from "./component/Footer";

gsap.registerPlugin(ScrollTrigger);
function App() {
  return (
    <main>
      <NavBar />
      <Hero />
      <ProductViewer />
      <Showcase/>
      <Performance />
      <Features />
      <Highlights />
      <Footer />
    </main>
  );
}

export default App;
