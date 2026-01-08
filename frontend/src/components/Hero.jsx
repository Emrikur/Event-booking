import React from "react";
import heroImg from "../assets/hero.jpg";
import "../styles/Hero.css";


function Hero() {
  return (
    <section className="hero">
       <img src={heroImg} alt="Hero" className="hero-image" />
      <div className="hero-overlay">
        <h1 className="hero-title">EventHub</h1>
        <p className="hero-text">Find, create, and book events across Sweden</p>
      </div>
    </section>
  );
}

export default Hero;
