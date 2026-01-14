import "../styles/about/AboutValues.css";
import * as LucideIcons from "lucide-react";
import { useEffect, useState } from "react";
import { getValue } from "../services/sanity";

export default function AboutValues() {
  const [valueData, setValueData] = useState([]);

  useEffect(() => {
    async function fetchValue() {
      await getValue()
        .then((data) => setValueData(data))
        .catch((err) => console.error(err));
    }

    fetchValue();
  }, []);

  return (
    <section className="about-values-section">
      <div className="values-header-titles">
        <span className="badge">Our Values</span>
        <h2>What We Stand For</h2>
      </div>

      <div className="values-flex-container">
        {valueData.map((value) => {
          const Icon = LucideIcons[value.icon];

          return (
            <>
              <div key={value._id}>
                <div className="Value-icon-box">
                  {Icon ? <Icon /> : <LucideIcons.CircleQuestionMark />}
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
}
