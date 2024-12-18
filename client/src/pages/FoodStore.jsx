import "../css/FoodStore.css";
import {
  FaAppleAlt,
  FaUtensils,
  FaCarrot,
  FaLeaf,
  FaHeartbeat,
  FaDrumstickBite,
} from "react-icons/fa";
import healthyGif from "/healthy.gif"; // Add a GIF for visual appeal
import cookingGif from "/cooking.gif"; // Add another GIF for visual appeal

const FoodStore = () => {
  return (
    <div className="foodstore-container">
      <header className="header">
        <h1>FOOD STORE</h1>
        <p>Virtual guided shopping for a healthy diet</p>
      </header>

      <section className="intro-section">
        <img src={healthyGif} alt="Healthy Eating" className="intro-gif" />
        <p>
          It's always a challenge trying to figure out what you should eat if
          you're on a restricted diet. Most health conditions require a diet
          tailored to bio-functional needs to ensure recovery.
        </p>
        <p>
          Welcome to our virtual food store where you will find ingredients to
          suit your diet. We also have recipes to help you overcome or prevent
          yourself from health challenges.
        </p>
      </section>

      <section className="categories-section">
        <h2>Food Categories</h2>
        <ul className="icon-list">
          <li>
            <FaUtensils className="icon" /> Eating Out
          </li>
          <li>
            <FaAppleAlt className="icon" /> Home Food
          </li>
          <li>
            <FaCarrot className="icon" /> Snacks
          </li>
          <li>
            <FaDrumstickBite className="icon" /> Drinks
          </li>
        </ul>
      </section>

      <section className="health-conditions-section">
        <h2>Health Conditions</h2>
        <ul className="icon-list">
          <li>
            <FaHeartbeat className="icon" /> Weight Reduction
          </li>
          <li>
            <FaLeaf className="icon" /> Allergies and Food Sensitivity
          </li>
          <li>
            <FaLeaf className="icon" /> Food Intolerance
          </li>
          <li>
            <FaHeartbeat className="icon" /> High Blood Sugar
          </li>
          <li>
            <FaLeaf className="icon" /> High Cholesterol Level
          </li>
          <li>
            <FaHeartbeat className="icon" /> Autoimmune Disorders
          </li>
          <li>
            <FaLeaf className="icon" /> Endocrine Disruption
          </li>
          <li>
            <FaHeartbeat className="icon" /> Skin Conditions
          </li>
        </ul>
      </section>

      <section className="food-categories-section">
        <h2>Food Categories</h2>
        <ul className="icon-list">
          <li>
            <FaCarrot className="icon" /> Vegetables
          </li>
          <li>
            <FaAppleAlt className="icon" /> Fruits
          </li>
          <li>
            <FaLeaf className="icon" /> Nuts
          </li>
          <li>
            <FaCarrot className="icon" /> Grains and Legumes
          </li>
          <li>
            <FaLeaf className="icon" /> Spices
          </li>
          <li>
            <FaLeaf className="icon" /> Herbs
          </li>
          <li>
            <FaAppleAlt className="icon" /> Sweeteners
          </li>
        </ul>
      </section>

      <section className="nutrition-section">
        <h2>Nutritional Content</h2>
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Micronutrients</td>
              <td>Vitamins, minerals, antioxidants</td>
            </tr>
            <tr>
              <td>Macronutrients</td>
              <td>Proteins, carbohydrates, fats</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="virtual-kitchen-section">
        <h2>Virtual Kitchen</h2>
        <img src={cookingGif} alt="Cooking" className="virtual-kitchen-gif" />
        <p>
          Explore our recipes and food combinations through interactive content
          tools.
        </p>
        <div className="interactive-tools">
          <button onClick={() => alert("Explore Recipes!")}>
            Explore Recipes
          </button>
          <button onClick={() => alert("Create Your Diet Profile!")}>
            Create Diet Profile
          </button>
        </div>
      </section>

      <section className="diet-profile-section">
        <h2>Diet Profile</h2>
        <p>Answer these questions to evaluate your diet:</p>
        <form className="diet-profile-form">
          {/* Question 1 */}
          <div className="form-group">
            <label>Do you consider your diet healthy?</label>
            <div>
              <label>
                <input type="radio" name="healthyDiet" value="Yes" /> Yes
              </label>
              <label>
                <input type="radio" name="healthyDiet" value="No" /> No
              </label>
            </div>
          </div>

          {/* Question 2 */}
          <div className="form-group">
            <label>Do you have any addictions or cravings?</label>
            <textarea
              name="addictions"
              rows="3"
              placeholder="Describe any cravings or addictions (optional)"
            ></textarea>
          </div>

          {/* Question 3 */}
          <div className="form-group">
            <label>Do you think your health is connected to your diet?</label>
            <div>
              <label>
                <input type="radio" name="healthConnection" value="Yes" /> Yes
              </label>
              <label>
                <input type="radio" name="healthConnection" value="No" /> No
              </label>
            </div>
          </div>

          {/* Question 4 */}
          <div className="form-group">
            <label>What foods do you like or dislike and why?</label>
            <textarea
              name="foodPreferences"
              rows="3"
              placeholder="Share your preferences (e.g., I dislike broccoli because...)"
            ></textarea>
          </div>

          {/* Question 5 */}
          <div className="form-group">
            <label>How much water do you drink daily?</label>
            <select name="waterIntake">
              <option value="1-4">1-4 glasses</option>
              <option value="5-8">5-8 glasses</option>
              <option value="9+">9+ glasses</option>
            </select>
          </div>

          {/* Question 6 */}
          <div className="form-group">
            <label>What are your favorite snacks and drinks?</label>
            <textarea
              name="snacksAndDrinks"
              rows="3"
              placeholder="E.g., I like cookies and coffee."
            ></textarea>
          </div>

          {/* Question 7 */}
          <div className="form-group">
            <label>How many times do you snack daily?</label>
            <input type="number" name="snackFrequency" min="0" max="10" />
          </div>

          {/* Question 8 */}
          <div className="form-group">
            <label>How often do you eat at home or at a restaurant?</label>
            <select name="eatingFrequency">
              <option value="Mostly Home">Mostly Home</option>
              <option value="Mostly Restaurant">Mostly Restaurant</option>
              <option value="Balanced">Balanced</option>
            </select>
          </div>

          <button type="submit" className="submit-btn">
            Submit Profile
          </button>
        </form>
      </section>

      <footer className="footer">
        <p>
          You are what you eat. Understanding that a proper diet is key to good
          health helps you stay healthy.
        </p>
      </footer>
    </div>
  );
};

export default FoodStore;
