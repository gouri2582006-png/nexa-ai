import { useState } from "react";
import { askAI } from "../services/gemini";

function InterviewPrep({ profile }) {
  const [questions, setQuestions] = useState("");
  const [loading, setLoading] = useState(false);

  async function generateQuestions() {
    setLoading(true);

    const response = await askAI(
      `Generate interview preparation for:

Career Goal: ${profile.careerGoal}

Skills:
${profile.skills}

Return:

📌 10 Technical Interview Questions

💬 5 HR Interview Questions

🧠 5 Aptitude Questions

🎯 Interview Tips

Keep everything beginner friendly.`,
      profile
    );

    setQuestions(response);
    setLoading(false);
  }

  return (
    <div className="bg-zinc-900 p-6 rounded-3xl">

      <h2 className="text-3xl font-bold mb-6">
        🎤 AI Interview Prep
      </h2>

      <button
        onClick={generateQuestions}
        className="bg-purple-600 px-6 py-3 rounded-xl"
      >
        Generate Questions
      </button>

      {loading && (
        <p className="mt-5 animate-pulse">
          🤖 Generating Interview Questions...
        </p>
      )}

      {questions && (
        <div className="mt-6 bg-zinc-800 p-5 rounded-2xl whitespace-pre-wrap">
          {questions}
        </div>
      )}

    </div>
  );
}

export default InterviewPrep;