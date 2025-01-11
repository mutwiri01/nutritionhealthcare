import { useEffect } from "react";
import "../css/home.css"; // Updated CSS file

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Home = () => {
  useEffect(() => {
    // Function to animate numbers
    const animateNumbers = (element) => {
      const numbers = element.querySelectorAll(".interactive-number");
      numbers.forEach((number) => {
        const targetValue = +number.getAttribute("data-value");
        let count = 0;
        const increment = targetValue / 200; // Animation speed
        const updateNumber = () => {
          count += increment;
          if (count >= targetValue) {
            number.textContent = targetValue.toLocaleString();
          } else {
            number.textContent = Math.floor(count).toLocaleString();
            requestAnimationFrame(updateNumber);
          }
        };
        updateNumber();
      });
    };

    // Function to handle section animations
    const handleAnimations = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-section");
          if (entry.target.classList.contains("interactive-numbers-content")) {
            animateNumbers(entry.target);
          }
        }
      });
    };

    // Intersection Observer setup
    const observer = new IntersectionObserver(handleAnimations, {
      threshold: 0.2,
    });

    const sections = document.querySelectorAll(".home-section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect(); // Cleanup on unmount
  }, []);
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div
        className="home-hero home-section"
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
      <div className="home-content home-section">
        <div className="content-wrapper">
          {/* First Paragraph with Image on the Right */}
          <div className="content-row">
            <div className="content-text home-subtitle">
              <p>
                Diabetes, cancers, cardiovascular diseases, chronic respiratory
                infections, mental health disorders, stroke, and other
                non-communicable diseases are now the leading cause of death and
                disability in developing countries. Due to their chronic nature,
                patients suffer from these diseases for prolonged periods,
                requiring more medical care, resulting in higher costs.
              </p>
            </div>
          </div>

          {/* Second Paragraph with Image on the Left */}
          <div className="content-row ">
            <div className="content-text home-subtitle">
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
          <div className="interactive-numbers-content home-section">
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
        <h2 className="topics-title">Explore Our Topics</h2>
        <div className="topics-table">
          {/* Example Topic 1 */}
          <a href="/education" className="topic-row">
            <img
              src="/h5.png"
              alt="Diabetes Awareness"
              className="topic-image"
            />
            <div className="topic-text">
              <h3>Food Justice, Lifestyle, and Health</h3>
              <p>
                Learn about Food Justice, Lifestyle, and Health, including tips
                for diet, exercise, and healthcare management.
              </p>
            </div>
          </a>

          {/* Example Topic 2 */}
          <a href="/campaign" className="topic-row">
            <img src="/h3.png" alt="Mental Health" className="topic-image" />
            <div className="topic-text">
              <h3>Advocacy for Preventive Health</h3>
              <p>
                Discover strategies to maintain wellness and reduce stress in
                your daily life.
              </p>
            </div>
          </a>

          {/* Example Topic 3 */}
          <a href="/campaign" className="topic-row">
            <img
              src="/h7.png"
              alt="Cardiovascular Health"
              className="topic-image"
            />
            <div className="topic-text">
              <h3>Health Freedom</h3>
              <p>
                Find out how to protect your heart with actionable advice on
                lifestyle and treatment options.
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
