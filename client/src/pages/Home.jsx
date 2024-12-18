import { FaAppleAlt, FaCarrot, FaHeartbeat } from "react-icons/fa";
import "../css/home.css"; // Import the CSS file

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="home-hero">
        <div className="home-text">
          <h1 className="home-title">
            Welcome to the Centre for Nutritional Healthcare
          </h1>
          <p className="home-subtitle">
            We deliver natural healthcare solutions that are sustainable,
            comprehensive, and restorative. Our contribution to better health is
            guided by modulating nutrition and lifestyles within communities and
            restoring ecosystems to sustain and prolong lives.
          </p>
        </div>
      </div>

      <div className="home-slider-container">
        <h2 className="home-slider-title">Explore Nutritional Healthcare</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false, // keeps autoplay on interaction
          }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="home-slider"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="home-slide-card">
              <h3 className="home-slide-title">Lifestyle and health</h3>
              <p className="home-slide-text">
                Discover the impact of balanced diets on promoting healthy
                lifestyles and reducing chronic diseases.
              </p>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="home-slide-card">
              <h3 className="home-slide-title">Healthy Foods</h3>
              <p className="home-slide-text">
                Learn about nutrient-dense foods that contribute to sustainable
                health.
              </p>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="home-slide-card">
              <h3 className="home-slide-title">Natural Remedies</h3>
              <p className="home-slide-text">
                Explore natural remedies that complement modern healthcare
                approaches.
              </p>
            </div>
          </SwiperSlide>

          {/* Additional Slide 4 */}
          <SwiperSlide>
            <div className="home-slide-card">
              <h3 className="home-slide-title">Herbal Medicine</h3>
              <p className="home-slide-text">
                Discover the benefits of herbal medicine and how it supports
                health.
              </p>
            </div>
          </SwiperSlide>

          {/* Additional Slide 5 */}
          <SwiperSlide>
            <div className="home-slide-card">
              <h3 className="home-slide-title">Wellness Practices</h3>
              <p className="home-slide-text">
                Explore wellness practices that enhance overall health and well-being.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Icons Section */}
      <div className="home-icon-container">
        <div className="home-icon-wrapper">
          <div className="home-icon">
            <FaAppleAlt />
          </div>
          <p className="home-icon-text">Redefine healthcare</p>
        </div>
        <div className="home-icon-wrapper">
          <div className="home-icon">
            <FaHeartbeat />
          </div>
          <p className="home-icon-text">Transform lifestyles</p>
        </div>
        <div className="home-icon-wrapper">
          <div className="home-icon">
            <FaCarrot />
          </div>
          <p className="home-icon-text">Restore ecosystems</p>
        </div>
      </div>

      {/* Topics Cards Section */}
      <div className="home-cards-container">
        {/* Strategy for Alternative Healthcare */}
        <div className="home-card">
          <img
            src="/h2.png"
            alt="Strategies for Alternative Healthcare"
            className="home-card-image"
          />
          <h2 className="home-card-title">
            Strategies For Alternative Healthcare
          </h2>
          <p className="home-card-text">
            Conventional healthcare relies on pharmaceutical medicine to manage
            diseases. However, new scientific research findings have opened
            doors to alternative care for existing lifestyle health conditions
            previously regarded as chronic.
          </p>
          <button
            className="home-card-button"
            onClick={() => (window.location.href = "/education")}
          >
            Learn More
          </button>
        </div>

        {/* Food Justice */}
        <div className="home-card">
          <img src="/v1.png" alt="Food Justice" className="home-card-image" />
          <h2 className="home-card-title">Food Justice</h2>
          <p className="home-card-text">
            In the quest to meet demand, global food production and processing
            systems have sidelined nutritional value to prioritize food
            security. This has led to the emergence of high-calorie but
            low-nutrient diets that cause nutrient deficiencies and trigger
            diseases.
          </p>
          <button
            className="home-card-button"
            onClick={() => (window.location.href = "/campaign")}
          >
            Learn More
          </button>
        </div>

        {/* Organic Community */}
        <div className="home-card">
          <img
            src="/h11.png"
            alt="Organic Community"
            className="home-card-image"
          />
          <h2 className="home-card-title">Organic Community</h2>
          <p className="home-card-text">
            Fostering local organic farming initiatives that empower communities
            and support sustainable living practices.
          </p>
          <button
            className="home-card-button"
            onClick={() => (window.location.href = "/projects")}
          >
            Learn More
          </button>
        </div>

        {/* Coaching */}
        <div className="home-card">
          <img src="/h12.png" alt="Coaching" className="home-card-image" />
          <h2 className="home-card-title">Coaching</h2>
          <p className="home-card-text">
            Coaching is at the heart of our mission, helping individuals achieve
            optimal health and wellbeing by focusing on personalized nutrition
            and lifestyle changes.
          </p>
          <button
            className="home-card-button"
            onClick={() => (window.location.href = "/health-coaching")}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
