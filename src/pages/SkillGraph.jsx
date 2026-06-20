import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function SkillGraph({ profile }) {
  const skills =
    profile.skills
      ?.split(",")
      .map((skill) => skill.trim())
      .filter((skill) => skill !== "") || [];

  const data = skills.map((skill, index) => ({
    name: skill,
    level: 60 + (index * 10) % 40,
  }));

  return (
    <div className="bg-zinc-900 p-6 rounded-2xl">
      <h2 className="text-2xl font-bold mb-6">
        Skill Graph
      </h2>

      {skills.length === 0 ? (
        <p>Add skills in Profile first.</p>
      ) : (
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="level" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

export default SkillGraph;