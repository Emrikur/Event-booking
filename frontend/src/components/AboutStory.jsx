import React from "react";
import "../styles/about/AboutStory.css";
import storyImage from "../assets/story.jpg";


const AboutStory = () => {
  return (
    <section className="about-story">
      <div className="about-story-container">
        <div className="about-story-texts">
          <p className="about-story-main-title">Our Story</p>
          <h2 className="about-story-subtitle">How EventHub Started</h2>

            <div className="about-story-whole-layout">
            <div className="about-story-layout">
          <h3 className="about-story-subheading">Born from a Simple Idea</h3>
          <p className="about-story-text">
            EventHub started in 2023 when our founders struggled to find local events that matched their interests.
            They realized that while amazing experiences were happening all around, discovering them was unnecessarily complicated.
          </p>
          <p className="about-story-text">
            What began as a weekend project quickly grew into a platform serving thousands of event creators and attendees across Sweden.
            Today, EventHub helps people discover everything from intimate workshops to large festivals, all in one place.
          </p>
          <p className="about-story-text">
            We're just getting started. Our vision is to become the go-to platform for community events across Europe,
            making it easier than ever for people to connect through shared passions.
          </p>

          </div>
        <div className="about-story-image">
          <img src={storyImage} alt="Our Story" />
        </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default AboutStory;
