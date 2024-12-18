import { useState } from "react";
import { FaUser, FaBuilding } from "react-icons/fa";
import "../css/healthcoaching.css";

const HealthCoaching = () => {
  const [activeSection, setActiveSection] = useState("");
  const [personalFormData, setPersonalFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    healthConcerns: "",
  });
  const [corporateFormData, setCorporateFormData] = useState({
    organizationName: "",
    numberOfMembers: "",
    programFeatures: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const switchSection = (section) => {
    setActiveSection(activeSection === section ? "" : section);
    setSuccessMessage("");
    setError("");
  };

  const handlePersonalInputChange = (e) => {
    const { name, value } = e.target;
    setPersonalFormData({ ...personalFormData, [name]: value });
  };

  const handleCorporateInputChange = (e) => {
    const { name, value } = e.target;
    setCorporateFormData({ ...corporateFormData, [name]: value });
  };

  const handlePersonalFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccessMessage("");

    try {
      const response = await fetch(
        "https://cloudnutri.vercel.app/api/forms/personal",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(personalFormData),
        }
      );

      if (response.ok) {
        setSuccessMessage("Personal coaching data submitted successfully!");
        setPersonalFormData({
          fullName: "",
          email: "",
          phoneNumber: "",
          healthConcerns: "",
        });
      } else {
        const errorData = await response.json();
        setError(`Error: ${errorData.message || "Unable to submit data"}`);
      }
    } catch (err) {
      setError(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleCorporateFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccessMessage("");

    try {
      const response = await fetch(
        "https://cloudnutri.vercel.app/api/forms/corporate",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(corporateFormData),
        }
      );

      if (response.ok) {
        setSuccessMessage("Corporate coaching data submitted successfully!");
        setCorporateFormData({
          organizationName: "",
          numberOfMembers: "",
          programFeatures: "",
        });
      } else {
        const errorData = await response.json();
        setError(`Error: ${errorData.message || "Unable to submit data"}`);
      }
    } catch (err) {
      setError(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-container">
      <h1 className="title">Health Coaching</h1>

      <div className="card-container">
        <div
          className={`card ${activeSection === "personal" ? "active-card" : ""}`}
          onClick={() => switchSection("personal")}
        >
          <FaUser className="icon" />
          <h3>Personal Coaching</h3>
        </div>
        <div
          className={`card ${activeSection === "corporate" ? "active-card" : ""}`}
          onClick={() => switchSection("corporate")}
        >
          <FaBuilding className="icon" />
          <h3>Corporate Coaching</h3>
        </div>
      </div>

      {error && <div className="error-message">{error}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}

      {activeSection === "personal" && (
        <div className="section">
          <h2>Personal Health Coaching</h2>
          <p>
          Many cases of lifestyle diseases proceed to severe stages or death when they could have been terminated at early stages. 
          </p>
          <p>Personal health coaching is a sure approach to disrupt progression of disease by addressing the underlying causes through individual lifestyle change.</p>
          <p>This personalized approach approach offers guidance for behaviour and lifestyle change to people with or at risk of one or more chronic health conditions such as diabetes, hypertension, obesity, as well chronic inflammatory and metabolic conditions.</p>
          <p>At the end of the coaching season, patients benefit from knowledge skills and confidence on how to manage their conditions. </p>
          <p>Due to it's integrative nature, health coaching motivates patients to self manage and adopt healthy behaviour and lifestyles with confidence.</p>

          
        </div>
      )}

      {activeSection === "corporate" && (
        <div className="section">
          <h2>Corporate Health Coaching</h2>
          <p>A healthy workforce is a guarantee for higher human resource output. Today's busy and hectic occupational space exposes workers to onset of various risk factors for morbidity. This phenomenon undermines the overall productivity of any organization and erodes profits.</p>
          <p>Lack of mechanisms to monitor and check this phenomenon leads to general indisposition of the workforce and decreased individual productivity levels in the workplace.</p>
          <p>Added to this is the prevalent unhealthy lifestyles mainly influenced by poor dietary practices that lead to diseases. </p>
          <p>There exists an urgent need to develop coping mechanisms for these emerging challenges that every organization should embrace. </p>
          <p>Centre for Nutritional Healthcare (CNH) offers intervention programs that help plug the drain in corporate profits year after year.</p>
          <p>The programs restore energy and confidence in the workplaces and help staff redefine their lifestyles for healthier, productive living. </p>
          <p>The interventions will address risk factors to health that lead to low performance and often occasion absence from duty. This is a win-win situation for both the employee and employer.</p>

          
        </div>
      )}
    </div>
  );
};

export default HealthCoaching;
