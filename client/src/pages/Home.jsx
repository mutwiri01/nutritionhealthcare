import { useEffect } from "react";
import "../css/home.css"; // Updated CSS file

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Home = () => {
  useEffect(() => {
    const animateNumbers = () => {
      const numbers = document.querySelectorAll(".interactive-number");
      numbers.forEach((number) => {
        const targetValue = +number.getAttribute("data-value");
        let count = 0;
        const increment = targetValue / 200; // Animation speed
        const updateNumber = () => {
          count += increment;
          if (count >= targetValue) {
            number.textContent = targetValue.toLocaleString(); // Add commas
          } else {
            number.textContent = Math.floor(count).toLocaleString();
            requestAnimationFrame(updateNumber);
          }
        };
        updateNumber();
      });
    };

    const handleScroll = () => {
      const numbersSection = document.querySelector(
        ".interactive-numbers-content"
      );
      if (numbersSection) {
        const rect = numbersSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          animateNumbers();
          window.removeEventListener("scroll", handleScroll); // Trigger once
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div
        className="home-hero"
        style={{
          backgroundImage: "url('/la1.jpeg')",
          backgroundAttachment: "fixed", // Enables scroll-over effect
          backgroundSize: "contain",
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="home-text fade-effect">
          <h1 className="home-title">
            &ldquo;DEVELOPING INNOVATIVE APPROACHES TO STOP THE RISING BURDEN OF
            LIFESTYLE DISEASES&quot;
          </h1>
          <p className="home-subtitle">
            Lifestyle diseases have taken the place of infectious diseases and
            are indiscriminately afflicting people across the demographic
            divide. Healthcare systems are overwhelmed and there is an urgent
            need to deploy new approaches to deal with this scourge.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="home-content">
        <div className="content-wrapper">
          {/* First Paragraph with Image on the Right */}
          <div className="content-row">
            <div className="content-text">
              <p>
                Diabetes, cancers, cardiovascular diseases, chronic respiratory
                infections, mental health disorders, stroke, and other
                non-communicable diseases are now the leading cause of death and
                disability in developing countries. Due to their chronic nature,
                patients suffer from these diseases for prolonged periods,
                requiring more medical care, resulting in higher costs.
              </p>
            </div>
            <div className="content-image">
              <img src="/fa2.png" alt="Disease Awareness" />
            </div>
          </div>

          {/* Second Paragraph with Image on the Left */}
          <div className="content-row ">
            <div className="content-text">
              <p>
                Globally, over 14 million people between the ages of 30 and 70
                years die every year, and 85% of these deaths are in developing
                countries. In Kenya, 50% of total hospital admissions and over
                55% of hospital deaths are due to non-communicable diseases
                (NCDs).
              </p>
            </div>
          </div>

          {/* Interactive Numbers */}
          <div className="interactive-numbers-content">
            <div className="number-item">
              <span className="interactive-number" data-value="14000000">
                0
              </span>
              <p>people die every year globally</p>
            </div>
            <div className="number-item">
              <span className="interactive-number" data-value="85">
                0
              </span>
              <p>% of these deaths are in developing countries</p>
            </div>
            <div className="number-item">
              <span className="interactive-number" data-value="50">
                0
              </span>
              <p>% of total hospital admissions in Kenya</p>
            </div>
            <div className="number-item">
              <span className="interactive-number" data-value="55">
                0
              </span>
              <p>% of hospital deaths in Kenya</p>
            </div>
          </div>
        </div>
      </div>

      <div className="new-section">
        <div className="new-section-content">
          <img src="/fa1.jpg" alt="Centered" className="new-section-image" />
          <div className="new-section-text animated-text">
            <p>
              Families face imminent poverty due to high costs of treatment and
              deaths of breadwinners. On a national scale, economic productivity
              is scaled down by an ailing workforce and early deaths as well as
              high budgetary allocations for health.
            </p>
            <p>
              It is imperative that sustainable interventions are explored and
              employed to checkmate this unfortunate scenario. Centre for
              Nutritional Healthcare is championing a shift in healthcare, by
              promoting and managing overall well-being of individuals through
              lifestyle change, and their empowerment towards healthier choices.
              Through its programs, it intends to transform healthcare and make
              it sustainable, comprehensive, and restorative. According to
              nutritional healthcare science, diet and lifestyle are key
              determinants of human health, while disease is a direct
              consequence of improper application of the same.
            </p>
          </div>
        </div>
      </div>
      {/* Card Section */}
      <div className="topics-section">
        <img
          src="/l2.png"
          alt="Key Topics Overview"
          className="topics-header-image"
        />
        <div className="topics-table">
          <a href="/campaign" className="topic-row">
            <img src="/h5.png" alt="Food Justice" className="topic-image" />
            <p className="topic-text">Food Justice, Lifestyle, and Health</p>
          </a>
          <a href="/education" className="topic-row">
            <img src="/v1.png" alt="Plant Proteins" className="topic-image" />
            <p className="topic-text">
              Accelerating Uptake of Plant Proteins to Bridge the Nutrient Gap
            </p>
          </a>
          <a href="/education" className="topic-row">
            <img
              src="/h3.png"
              alt="Preventive Health"
              className="topic-image"
            />
            <p className="topic-text">Advocacy for Preventive Health</p>
          </a>
          <a href="/education" className="topic-row">
            <img src="/h7.png" alt="Health Freedom" className="topic-image" />
            <p className="topic-text">Health Freedom</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
