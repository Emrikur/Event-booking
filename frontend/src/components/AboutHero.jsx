import React from "react";
import heroImg from "../assets/AboutHero.jpg";
import "../styles/about/AboutHero.css";


function AboutHero() {
  return (
    <section className="hero">
       <img src={heroImg} alt="Hero" className="hero-image" />
      <div className="hero-overlay">
        <h1 className="hero-title">About EventHub</h1>
        <p className="hero-text">We’re on a mission to bring people together through unforgettable experiences. EventHub makes it easy to discover, create, and share events that matter.</p>
      </div>
    </section>
  );
}

export default AboutHero;
