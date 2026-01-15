import { useEffect, useState } from "react";
import { PortableText } from "@portabletext/react";
import { getAboutStory } from "../services/sanity";

import "../styles/about/AboutStory.css";

function AboutStory() {
  const [story, setStory] = useState(null);

  useEffect(() => {
    async function fetchStory() {
      const data = await getAboutStory();
      setStory(data);
    }
    fetchStory();
  }, []);

  if (!story) return null;

  return (
    <section className="about-story">
      <div className="about-story-container">
        <div className="about-story-texts">
          <span className="badge">Our Story</span>

          <h2 className="about-story-subtitle">{story.title}</h2>

          <div className="about-story-whole-layout">
            <div className="about-story-layout">
              <h3 className="about-story-subheading">{story.subheading}</h3>
              <PortableText
                className="about-story-text"
                value={story.content}
              />
            </div>
            <div className="about-story-image">
              <img src={story.image.asset.url} alt={story.image.alt} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutStory;
