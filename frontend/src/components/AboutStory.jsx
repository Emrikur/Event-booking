import { useEffect, useState } from "react";
import { PortableText } from "@portabletext/react";
import { getAboutStory } from "../services/sanity";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

import "../styles/about/AboutStory.css";

function AboutStory() {
  const [story, setStory] = useState(null);
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    async function fetchStory() {
      const data = await getAboutStory();
      setStory(data);
    }
    fetchStory();
  }, []);

  if (!story) return null;
  const title = language === "EN" ? story.title_en : story.title_sv;
  const subheading =
    language === "EN" ? story.subheading_en : story.subheading_sv;
  const content = language === "EN" ? story.content_en : story.content_sv;
  const badgeText = language === "EN" ? "Our Story" : "Vår historia";
  return (
    <section className="about-story">
      <div className="about-story-container">
        <div className="about-story-texts">
          <span className="badge">{badgeText}</span>

          <h2 className="about-story-subtitle">{title}</h2>

          <div className="about-story-whole-layout">
            <div className="about-story-layout">
              <h3 className="about-story-subheading">{subheading}</h3>
              <PortableText className="about-story-text" value={content} />
            </div>
            <div className="about-story-image">
              <img
                src={story.image.asset.url}
                alt={story.image.alt}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutStory;
