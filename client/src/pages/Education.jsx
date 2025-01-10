import { useState } from "react";
import "../css/education.css";

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
              textTransform: "uppercase",
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
              textTransform: "uppercase",
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
              textTransform: "uppercase",
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
              textTransform: "uppercase",
            }}
          >
            Advocacy For Preventive Health
          </h3>
          <p>
            The global community must adopt suitable proactive and preventive
            health strategies to stem the burgeoning economic and social cost of
            disease burden
          </p>
          <p>
            Every person should instinctively be responsible for their own sense
            of safety. Just like we are wired to react to external dangers to
            our lives, like crossing the road after the nearest vehicle, so
            should we respond to threats to our health.
          </p>
          <p>
            Prevention is better than cure because we prevent ourselves from
            harm rather than wait to deal with it's consequences. If we applied
            the same reasoning to our health, we would live longer healthier
            lives
          </p>
          <p>
            While disease burden continues to rise unabatedly, healthcare
            practice maintains medical treatment as the solution to all health
            challenges. While this is the scientific practice in global
            healthcare the approach is today facing serious bio-systemic
            challenges such as drug resistance and side effects.{" "}
          </p>
          <p>
            Lifestyle diseases have pervaded our lives through unhealthy dietary
            culture and lifestyles and are cutting across the society regardless
            of age, gender or social class. These diseases today account for 70%
            of all deaths from illness worldwide.{" "}
          </p>
          <p>
            As the world scrambles to find a suitable solution to this scourge,
            there is overwhelming scientific evidence of preventive methods of
            reversing lifestyle diseases which have been ignored.
          </p>
          <p>
            As the most common medium of interaction with our bodies, primary
            and secondary food are the greatest catalysts on the function and
            status of the body at any given time in our lives. Thieir capacity
            to nourish, maintain and support proper and balanced biological body
            function as well as protect it from disease cannot be gainsaid.
            What's more, food nutrients and lifestyle are not only able to
            reverse diseases, they also actively prevent the body from onset of
            the same.
          </p>
          <p>
            This calls for consumer empowerment to enable them make informed
            lifestyle choices and develop a proactive mentality on individual
            health leading to longer productive lives.
          </p>
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
      <h1 className="title">NUTRITIONAL INFORMATION </h1>
      <img className="education-image" src="/e1.jpg" alt="Education" />
      <div className="introduction">
        <p>
          Public education is a vital tool for social economic change and
          growth. Going by the threat to life and heavy economic burden posed by
          lifestyle diseases in society today, no effort should be spared to
          enlighten and empower the people to overcome these challenges.
        </p>
        <p>Centre for Nutritional Health provides knowledge and organises public sensitization and education forums to empower communities in making informed lifestyle and dietary choices. It is expected that such interventions will build momentum towards the required change and transformation of healthcare and livelihoods.</p>
      </div>

      <div className="grid">
        {/* Card for Lifestyle & Health */}
        <div className="card">
          <div className="icon">
            <img src="/li1.jpg" alt="Lifestyle & Health" />
          </div>
          <h3 className="card-title">Lifestyle & Health</h3>
          <ul>
            <li
              className="list-item"
              onClick={() =>
                handleListItemClick("Strategies For Alternative Healthcare")
              }
            >
              <img
                src="/fa1.jpg"
                alt="Lifestyle & Health"
                style={{
                  width: "180px",
                  height: "180px",
                  objectFit: "contain",
                }}
              />
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
              <img
                src="/fa2.png"
                alt="Lifestyle & Health"
                style={{
                  width: "180px",
                  height: "180px",
                  objectFit: "contain",
                }}
              />
              High Nutrient Diets Lead To Healthier Productive Communities
            </li>
          </ul>
        </div>

        {/* Card for Environment & Nutrition */}
        <div className="card">
          <div className="icon">
            <img src="/env.png" alt="Environment & Nutrition" />
          </div>
          <h3 className="card-title">Environment & Nutrition</h3>
          <ul>
            <li
              className="list-item"
              onClick={() =>
                handleListItemClick("Organic Diet Is Key To Restorative Health")
              }
            >
              <img
                src="/la2.jpg"
                alt="Lifestyle & Health"
                style={{
                  width: "180px",
                  height: "180px",
                  objectFit: "contain",
                }}
              />
              Organic Diet Is Key To Restorative Health
            </li>
          </ul>
        </div>

        {/* Card for Advocacy For Preventive Health */}
        <div className="card">
          <div className="icon"></div>
          <h3 className="card-title">Advocacy For Preventive Health</h3>
          <ul>
            <li
              className="list-item"
              onClick={() =>
                handleListItemClick("advocacy for preventive health")
              }
            >
              <img
                src="/h4.png"
                alt="Lifestyle & Health"
                style={{
                  width: "280px",
                  height: "280px",
                  objectFit: "contain",
                }}
              />
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
