import { useState } from "react";
import Groq from "groq-sdk";
import config from "../../config";
import "../css/Research.css";
import { FaRobot, FaUser } from "react-icons/fa"; // Import icons for bot and user

const groq = new Groq({
  apiKey: config.GROQ_API_KEY,
  dangerouslyAllowBrowser: true,
});

const Research = () => {
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const handleSendMessage = async () => {
    if (!userInput.trim()) return;

    const userMessage = { role: "user", content: userInput };
    const updatedChatHistory = [...chatHistory, userMessage];

    try {
      const response = await groq.chat.completions.create({
        messages: updatedChatHistory,
        model: "llama3-8b-8192",
      });

      const botMessage = {
        role: "assistant",
        content:
          response.choices[0]?.message?.content ||
          "Sorry, I could not provide an answer.",
      };

      setChatHistory([...updatedChatHistory, botMessage]);
      setUserInput("");
    } catch (error) {
      console.error("Error fetching chat response:", error);
    }
  };

  return (
    <div className="research-container">
      <h1 className="research-title">Nutritional Healthcare Chatbot</h1>
      <div className="chat-box">
        <div className="chat-history">
          {chatHistory.map((msg, index) => (
            <div
              key={index}
              className={`chat-message ${
                msg.role === "user" ? "user-message" : "bot-message"
              }`}
            >
              {msg.role === "user" ? (
                <div className="user-bubble">
                  <FaUser className="icon user-icon" />
                  <p>{msg.content}</p>
                </div>
              ) : (
                <div className="bot-bubble">
                  <FaRobot className="icon bot-icon" />
                  <p>{msg.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="How can I assist you with your nutrition goals today?"
          />
          <button onClick={handleSendMessage} className="research-topic">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Research;
