import { useState } from 'react';
import '../css/ResourceCenter.css';
import { FaBook, FaLeaf, FaHeartbeat, FaTint, FaAppleAlt, FaSeedling } from 'react-icons/fa';

const topics = [
  { 
    id: 'nutrition', 
    title: 'High Nutrient Diets Lead To Healthier Productive Communities', 
    icon: <FaLeaf />,
    content: (
      <>
        <p>The growing demand for low-nutrient, highly addictive processed foods, preferred for their taste, poses one of the biggest health challenges of modern society.</p>
        <p>The commercialization of the food chain in the 20th century led to mechanized processing and chemical-based preservation, prioritizing taste over nutrient quality and safety. This has led to widespread reliance on artificial sweeteners and low-nutrient diets.</p>
        <p>Today, over 90% of the global disease burden is linked to consumption of low-nutrient, high-calorie foods. Governments, however, are slow to regulate these artificial food industries, leading to increased consumer risk.</p>
        <p>The Centre for Nutritional Healthcare offers tools to empower consumers, enabling healthier choices and fostering independence in pursuing health.</p>
      </>
    )
  },
  { 
    id: 'deficiency', 
    title: 'Nutrient Deficiency - The Common Denominator for Degenerative Ailments', 
    icon: <FaHeartbeat />,
    content: (
      <>
        <p>"Fruit trees of all kinds will grow on both banks of the river. Their leaves will not wither, nor will their fruit fail. Every month they will bear fruit, because the water from the sanctuary flows to them. Their fruit will serve for food and their leaves for healing." - Ezekiel 47:12
        </p>
        <p>According to dictionary.com, to nourish is to supply with what is necessary for life, health, and growth;
        to cherish, foster, keep alive; and to strengthen, build up, or promote.</p>
        <p>Nourishment is the basic value of food to the body and this value is measured in nutrients. Nutrients enable the body to perform all its biological functions so as to maintain homeostasis.</p>
        <p>In summary the body needs nutrients to run metabolic processes so as to generate and circulate energy to sustain life and growth and maintain health through a complex bio-system.</p>
        <p>Without nutrients, these vital processes are compromised and lead to systemic breakdowns resulting in disease. </p>
        <p>With the shift in dietary lifestyles inspired by commercial food chains, in modern living, high nutrient diets have been compromised for "better tasting and convenient" but low nutrient diet.</p>
        <p>Sustained consumption of these foods results in deficit of vitamins and minerals leading to nutrient deficiency, the main cause of rampant lifestyle disease burden currently sweeping through our societies.</p>
        <p>The response to this calamity has not been effective as the healthcare system focuses on treating symptoms of associated diseases rather than the root causes.</p>
        <p>There is urgent need for a change of approach in addressing this malignant challenge and adoption of sustainable and comprehensive interventions to roll back the trend.</p>
        <p>As scientific evidence presents, proper biological body function can be.maintained by a sufficient supply of nutrients which are readily available from healthy food. Going forward, attention needs to shift to nutrient extraction as a function of nutrition.</p>
        <p>At the Centre for Nutritional Healthcare we believe that broad based and sustainable interventions offer the best chances of solving these complex health issues.</p>
        <p>"Let us build a culture of nutrient-rich diets as a vital pillar for preventive health"</p>
      </>
    )
  },
  { 
    id: 'strategies', 
    title: 'Strategies For Alternative Healthcare', 
    icon: <FaTint />,
    content: (
      <>
        <p>Conventional healthcare often depends on pharmaceuticals, but alternative approaches now offer safer, non-invasive solutions to lifestyle health conditions.</p>
        <p>This method redefines individual lifestyles to encourage natural health, minimize pharmaceutical side effects, and reduce health downtimes.</p>
        <p>The Centre for Nutritional Healthcare provides a revolutionary alternative care approach aimed at promoting health through natural methods.</p>
      </>
    )
  },
  { 
    id: 'justice', 
    title: 'Food Justice', 
    icon: <FaAppleAlt />,
    content: (
      <>
        <p>"We cannot eliminate the prevailing global threats to human health without addressing Food Justice."</p>
        <p>Food justice advocates for universal access to nutritious, affordable, and sustainable food as a basic human right, contrasting with modern food systems focused on quantity over quality.</p>
        <p>Today’s food production heavily relies on chemicals, leading to nutrient deficiency and chronic diseases. Food justice addresses these issues by promoting the safety and quality of our food sources.</p>
      </>
    )
  },
  { 
    id: 'organic', 
    title: 'Organic Diet Is Key To Restorative Health', 
    icon: <FaSeedling />,
    content: (
      <>
        <p>"We must make deliberate efforts to restore the ecosystem to reverse the disease pandemic."</p>
        <p>Scientific studies highlight the benefits of organic diets, linking them to robust health and longevity. The Centre for Nutritional Healthcare promotes organic food consumption to combat diseases caused by artificial food additives.</p>
        <p>Restoring natural ecosystems and promoting organic food production are essential to achieving lasting health for society.</p>
      </>
    )
  },
];

const ResourceCenter = () => {
  const [showTopics, setShowTopics] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
  };

  const handleClose = () => {
    setSelectedTopic(null);
    setShowTopics(false);
  };

  return (
    <div className="PageContainer">
      <h1 className="Title">Resource Center</h1>
      <div className="Grid">
        <div className="Card" onClick={() => setShowTopics(true)}>
          <div className="Icon"><FaBook /></div>
          <h3 className="CardTitle">E-Books and Articles</h3>
          <p>Access our library of resources on nutrition, health, and sustainable living.</p>
        </div>
      </div>

      {showTopics && !selectedTopic && (
        <div className="TopicsList">
          <h2>Topics</h2>
          <ul>
            {topics.map(topic => (
              <li 
                key={topic.id} 
                onClick={() => handleTopicClick(topic)}
                style={{ color: selectedTopic?.id === topic.id ? '#4CAF50' : '#000' }}
              >
                <span className="TopicIcon">{topic.icon}</span> {topic.title}
              </li>
            ))}
          </ul>
        </div>
      )}

      {selectedTopic && (
        <div className="TopicContent">
          <h3>{selectedTopic.title}</h3>
          <div className="ContentText">{selectedTopic.content}</div>
          <button className="CloseButton" onClick={handleClose}>Close</button>
        </div>
      )}

      
    </div>
  );
};

export default ResourceCenter;
