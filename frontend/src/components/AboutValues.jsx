import "../styles/about/AboutValues.css";
import * as LucideIcons from "lucide-react";
import { useEffect, useState } from "react";
import { getValue } from "../services/sanity";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export default function AboutValues() {
  const [valueData, setValueData] = useState([]);
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    async function fetchValue() {
      await getValue()
        .then((data) => setValueData(data))
        .catch((err) => console.error(err));
    }

    fetchValue();
  }, []);
  const badgeText = language === "EN" ? "Our Values" : "Våra värderingar";
  const sectionTitle =
    language === "EN" ? "What We Stand For" : "Det vi står för";

  return (
    <section className="about-values-section">
      <div className="values-header-titles">
      <span className="badge">{badgeText}</span>
       <h2>{sectionTitle}</h2>
      </div>

      <div className="values-flex-container">
        {valueData.map((value) => {
          const Icon = LucideIcons[value.icon];

          return (
            <div key={value._id}>
              <div className="Value-icon-box">
                {Icon ? <Icon /> : <LucideIcons.CircleQuestionMark />}
              </div>
              <h3>{language === "EN" ? value.title_en : value.title_sv}</h3>
              <p>{language === "EN" ? value.description_en : value.description_sv}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
