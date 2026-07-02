import { useState } from "react";
import { askAI } from "../services/gemini";

function Roadmaps({ profile }) {
  const [roadmap, setRoadmap] = useState("");
  const [loading, setLoading] = useState(false);

  async function generateRoadmap() {
    setLoading(true);

    const response = await askAI(
      `Create a complete career roadmap for:

Career Goal: ${profile.careerGoal}

Return in this format:

🎯 Career Overview

📚 Phase 1

📚 Phase 2

📚 Phase 3

🛠 Skills Required

📜 Certifications

💼 Job Roles

💰 Expected Salary in India

⏳ Estimated Learning Time

Keep it practical and beginner friendly.`,
      profile
    );

    setRoadmap(response);
    setLoading(false);
  }

  return (
    <div className="bg-zinc-900 p-6 rounded-3xl">

      <h2 className="text-3xl font-bold mb-6">
        🛣 AI Career Roadmap
      </h2>

      <p className="mb-5 text-zinc-400">
        Career Goal:
        <span className="text-white font-semibold">
          {" "}
          {profile.careerGoal || "Not Selected"}
        </span>
      </p>

      <button
        onClick={generateRoadmap}
        className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold"
      >
        Generate AI Roadmap
      </button>

      {loading && (
        <p className="mt-5 animate-pulse">
          🤖 Generating Roadmap...
        </p>
      )}

      {roadmap && (
        <div className="mt-6 bg-zinc-800 p-5 rounded-2xl whitespace-pre-wrap">
          {roadmap}
        </div>
      )}

    </div>
  );
}

export default Roadmaps;