import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function SkillChart() {
  const data = [
    { skill: "HTML", progress: 80 },
    { skill: "CSS", progress: 70 },
    { skill: "JavaScript", progress: 60 },
    { skill: "React", progress: 40 },
    { skill: "Git", progress: 50 },
  ];

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "20px",
        borderRadius: "10px",
        marginBottom: "20px",
      }}
    >
      <h2>📊 Skill Progress Graph</h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="skill" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="progress" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SkillChart;