import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hero from "./components/Hero";
import Features from "./components/Features";
import SocialProof from "./components/SocialProof";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Hero />
      <Features />
      <SocialProof />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
