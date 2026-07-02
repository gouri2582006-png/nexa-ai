import { useState } from "react";
import { FaRobot, FaUserCircle } from "react-icons/fa";
import { askAI } from "../services/gemini";

function AIMentor({ profile }) {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "👋 Hi! I'm Nexa AI. Ask me anything about careers, skills, interviews, roadmaps or learning.",
    },
  ]);

  async function handleSend(customQuestion) {
    const userQuestion = customQuestion || question;

    if (!userQuestion.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: userQuestion,
      },
    ]);

    setQuestion("");
    setLoading(true);

    const answer = await askAI(userQuestion, profile);

    setMessages((prev) => [
      ...prev,
      {
        sender: "ai",
        text: answer,
      },
    ]);

    setLoading(false);
  }

  return (
    <div className="flex flex-col h-[80vh] bg-zinc-900 rounded-3xl shadow-xl">

      {/* Header */}

      <div className="p-5 border-b border-zinc-800">
        <h2 className="text-2xl font-bold">
          🤖 Nexa AI Mentor
        </h2>

        <p className="text-zinc-400 mt-1">
          Your Personal Career Coach
        </p>
      </div>

      {/* Suggestions */}

      <div className="px-5 pt-4 flex flex-wrap gap-2">

        {[
          "Best career for me?",
          "What skills should I learn?",
          "Create my roadmap",
          "Resume tips",
        ].map((item) => (
          <button
            key={item}
            onClick={() => handleSend(item)}
            className="bg-zinc-800 hover:bg-blue-600 transition px-4 py-2 rounded-full text-sm"
          >
            {item}
          </button>
        ))}

      </div>

      {/* Chat */}

      <div className="flex-1 overflow-y-auto p-5 space-y-4">

        {messages.map((msg, index) => (

          <div
            key={index}
            className={`flex items-end gap-2 ${
              msg.sender === "user"
                ? "justify-end"
                : "justify-start"
            }`}
          >

            {msg.sender === "ai" && (
              <div className="bg-blue-600 p-2 rounded-full">
                <FaRobot size={18} />
              </div>
            )}

            <div
              className={`max-w-[80%] px-4 py-3 rounded-2xl whitespace-pre-wrap ${
                msg.sender === "user"
                  ? "bg-blue-600"
                  : "bg-zinc-800"
              }`}
            >
              {msg.text}
            </div>

            {msg.sender === "user" && (
              <div className="bg-zinc-700 p-2 rounded-full">
                <FaUserCircle size={18} />
              </div>
            )}

          </div>

        ))}

        {loading && (

          <div className="flex items-center gap-2">

            <div className="bg-blue-600 p-2 rounded-full">
              <FaRobot size={18} />
            </div>

            <div className="bg-zinc-800 px-4 py-3 rounded-2xl animate-pulse">
              Nexa AI is typing...
            </div>

          </div>

        )}

      </div>

      {/* Input */}

      <div className="border-t border-zinc-800 p-4 flex gap-3">

        <input
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend();
            }
          }}
          placeholder="Ask anything about your career..."
          className="flex-1 bg-zinc-800 rounded-xl px-4 py-3 outline-none"
        />

        <button
          onClick={() => handleSend()}
          className="bg-blue-600 hover:bg-blue-700 transition px-6 rounded-xl font-semibold"
        >
          Send
        </button>

      </div>

    </div>
  );
}

export default AIMentor;