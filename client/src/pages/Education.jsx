import { useState } from "react";
import "../css/education.css";
import { FaLeaf, FaHeartbeat } from "react-icons/fa";

const Education = () => {
  const [modalContent, setModalContent] = useState(null);

  const handleListItemClick = (content) => {
    if (content === "Organic Diet Is Key To Restorative Health") {
      setModalContent(
        <>
          <h3
            style={{
              fontWeight: "bold",
              color: "green",
              textTransform: "lowercase",
            }}
          >
            Organic Diet Is Key To Restorative Health
          </h3>
          <p>
            We must make deliberate efforts to restore the ecosystem as a
            primary measure to reverse the disease pandemic.
          </p>
          <p></p>
          <p>
            The importance of consumption of organically produced food for good
            health and longevity cannot be over emphasized. The human body is an
            organic structure that operates optimally in a natural ecosystem.
          </p>
          <p>
            Industrial food production and processing is today the biggest
            threat to human health. In scientific studies done around the world,
            communities that have low or no interaction with artificial food
            live longer healthier lives.
          </p>
          <p>
            Environmentalists have also flagged the use of agro-chemicals in
            food production as the single biggest challenge to the survival of
            natural flora and fauna.
          </p>
          <p>
            This phenomenon poses a big threat to human health today as seen in
            the proliferation of diseases today.
          </p>
          <p>
            Scientific evidence has confirmed that consumption of organically
            farmed foods is a panacea for good health. This trend is not new and
            has been gaining traction and popularity across the world in recent
            times.
          </p>
          <p>
            To find real good health, we must return to nature and mimic our
            ancestors. whose food culture was fully organic. They hunted animals
            for meat and gathered fruits, nuts and vegetables. And, this culture
            rewarded them with robust health and longevity, attributes that we
            can only envy today.
          </p>
          <p>
            We may not find these settings in our living spaces today, owing to
            decades of cultural modernisation which has had adverse impact on
            human diet and lifestyle. This highlights the glaring and urgent
            need to reconstruct natural ecosystems for healthy existence of
            humans. Furthermore, coexistence of humans with microbial colonies
            in the living environment has been found to support good health.
            Chemical pollution is responsible for disrupting this natural
            ecosystem and the rise of disease incidence
          </p>
        </>
      );
    } else if (
      content === "High Nutrient Diets Lead To Healthier Productive Communities"
    ) {
      setModalContent(
        <>
          <h3
            style={{
              fontWeight: "bold",
              color: "green",
              textTransform: "lowercase",
            }}
          >
            High Nutrient Diets Lead To Healthier Productive Communities
          </h3>
          <p>
            The growing demand for low nutrient, highly addictive processed
            foods, preferred for it's taste poses one of the biggest health
            challenges of modern society.{" "}
          </p>
          <p>
            The commercialization of the food chain at the turn of the 20th
            century led to mechanized food processing and chemical based
            preservation methods to feed the fast growing population.{" "}
          </p>
          <p>
            As demand grew, market competition led to focus on taste and
            addiction rather than quality and safety. This led to increased use
            of artificial food sweeteners and reduced attention to nutrient
            retention.
          </p>
          <p>
            Unfortunately this narrative fitted well with the socio-economic
            growth fueled by industrial revolution that introduced fast paced
            lives.
          </p>
          <p>
            In the quest to maximize profits, the food industry pulled all stops
            to attract the unsuspecting and innocent consumer to these high
            calorie foods.
          </p>
          <p>
            Today, 90% of the global disease burden is caused by the consumption
            of these low nutrient, high calorie foods. Unfortunately, the
            government agenda globally is not keen on regulating the artificial
            food industry in favour of the consumer as this would disrupt trade
            dynamics and upset the much needed revenue flow.
          </p>
          <p>
            Food preparation additives, processed food preservatives, artificial
            sweeteners and nutrients are today obvious risk factors for several
            chronic degenerative diseases that plague the society.
          </p>
          <p>
            Under these circumstances, the need for consumer empowerment has
            never been so dire. Majority of consumers are hurtling blindly to
            the cliff as they do not understand the cause and effect of the
            disease cycle associated with this phenomenon.
          </p>
          <p>
            Centre for Nutritional Healthcare has put together tools to empower
            consumers, enable them make the right choices and give them the much
            needed independence to pure health.
          </p>
        </>
      );
    } else if (content === "Strategies For Alternative Healthcare") {
      setModalContent(
        <>
          <h3
            style={{
              fontWeight: "bold",
              color: "green",
              textTransform: "lowercase",
            }}
          >
            Strategies For Alternative Healthcare
          </h3>
          <p>
            Conventional healthcare relies on pharmaceutical medicine to manage
            diseases. However, new scientific research findings have opened
            doors to the need to alternative care for existing lifestyle health
            conditions previously regarded as chronic.
          </p>
          <p>
            This approach involves safer non-invasive and protective safeguards
            that provide alternative resolutions and disrupt disease
            progression.{" "}
          </p>
          <p>
            It eliminates threats caused by food and environment (primary and
            secondary) and onboards health promoting and restorative solutions.{" "}
          </p>
          <p>
            By redefining certain parameters of individual lifestyles it
            empowers the body and provides relief from exposure to undesirable
            side effects of medicine.
          </p>
          <p>
            This program confers conservative, comprehensive and sustainable
            health benefits and eliminates the strain caused by frequent health
            downtimes.{" "}
          </p>
          <p>
            Centre for Nutritional Healthcare (CNH) has developed a
            revolutionary approach that will deliver natural health inspiring
            lifestyles
          </p>
        </>
      );
    } else if (content === "advocacy for preventive health") {
      setModalContent(
        <>
          <h3
            style={{
              fontWeight: "bold",
              color: "green",
              textTransform: "lowercase",
            }}
          >
            Advocacy For Preventive Health
          </h3>
          {/* Content for Advocacy */}
        </>
      );
    } else {
      setModalContent(<p>{content}</p>);
    }
  };

  const closeModal = () => {
    setModalContent(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="page-container">
      <h1 className="title">Education</h1>
      <img
        className="education-image"
        src="h13.png"
        alt="Education"
      />
      <div className="introduction">
        <p>
          Public education is a vital tool for social economic change and
          growth. Going by the threat to life and heavy economic burden posed by
          lifestyle diseases in society today, no effort should be spared to
          enlighten and empower the people to overcome these challenges. Centre
          for Nutritional Health shall organise public sensitization and
          education forums to get the message across.
        </p>
      </div>

      <div className="grid">
        {/* Card for Lifestyle & Health */}
        <div className="card">
          <div className="icon">
            <FaHeartbeat />
          </div>
          <h3 className="card-title">Lifestyle & Health</h3>
          <ul>
            <li
              className="list-item"
              onClick={() =>
                handleListItemClick("Strategies For Alternative Healthcare")
              }
            >
              Strategies For Alternative Healthcare
            </li>
            <li
              className="list-item"
              onClick={() =>
                handleListItemClick(
                  "High Nutrient Diets Lead To Healthier Productive Communities"
                )
              }
            >
              High Nutrient Diets Lead To Healthier Productive Communities
            </li>
          </ul>
        </div>

        {/* Card for Environment & Nutrition */}
        <div className="card">
          <div className="icon">
            <FaLeaf />
          </div>
          <h3 className="card-title">Environment & Nutrition</h3>
          <ul>
            <li
              className="list-item"
              onClick={() =>
                handleListItemClick("Organic Diet Is Key To Restorative Health")
              }
            >
              Organic Diet Is Key To Restorative Health
            </li>
          </ul>
        </div>

        {/* Card for Advocacy For Preventive Health */}
        <div className="card">
          <div className="icon">
            <FaLeaf />
          </div>
          <h3 className="card-title">Advocacy For Preventive Health</h3>
          <ul>
            <li
              className="list-item"
              onClick={() =>
                handleListItemClick("advocacy for preventive health")
              }
            >
              Advocacy For Preventive Health
            </li>
          </ul>
        </div>
      </div>

     
      {modalContent && (
        <div className="modal active">
          <div className="modal-content">
            {modalContent}
            <button className="close-button" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Education;
