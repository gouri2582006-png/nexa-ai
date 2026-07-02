import { useState } from "react";
import { askAI } from "../services/gemini";

function SkillGap({ profile }) {

  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function analyzeSkillGap() {

    setLoading(true);

    const response = await askAI(

`Student Skills:
${profile.skills}

Career Goal:
${profile.careerGoal}

Analyze the student's skill gap.

Return:

✅ Current Skills

❌ Missing Skills

📚 Learning Priority

🚀 Recommended Projects

⏳ Estimated Learning Time

💼 Job Readiness Score (0-100%)

Keep it neat using bullets.`,

profile

);

    setResult(response);
    setLoading(false);

  }

  return (

<div className="bg-zinc-900 p-6 rounded-3xl">

<h2 className="text-3xl font-bold mb-5">
🎯 AI Skill Gap Analyzer
</h2>

<p className="mb-6">
Career Goal:
<b> {profile.careerGoal || "Not Set"}</b>
</p>

<button
onClick={analyzeSkillGap}
className="bg-green-600 px-6 py-3 rounded-xl"
>
Analyze Skills
</button>

{loading && (
<p className="mt-5">
🤖 AI is analyzing...
</p>
)}

{result && (

<div className="mt-6 bg-zinc-800 rounded-2xl p-5 whitespace-pre-wrap">

{result}

</div>

)}

</div>

);

}

export default SkillGap;