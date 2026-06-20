function Roadmaps({ profile }) {
  const goal = profile.careerGoal.toLowerCase();

  let roadmap = [];

  if (goal.includes("frontend")) {
    roadmap = [
      "Learn HTML",
      "Learn CSS",
      "Learn JavaScript",
      "Learn React",
      "Build Projects",
      "Create Portfolio",
      "Apply for Jobs",
    ];
  } else if (
    goal.includes("full stack") ||
    goal.includes("fullstack")
  ) {
    roadmap = [
      "HTML & CSS",
      "JavaScript",
      "React",
      "Node.js",
      "MongoDB",
      "Build Full Stack Projects",
      "Apply for Jobs",
    ];
  } else if (
    goal.includes("data")
  ) {
    roadmap = [
      "Learn Python",
      "Statistics",
      "Pandas",
      "SQL",
      "Data Visualization",
      "Machine Learning Basics",
      "Build Projects",
    ];
  } else {
    roadmap = [
      "Complete Profile",
      "Choose Career Goal",
      "Get Recommendations",
    ];
  }

  return (
    <div className="bg-zinc-900 p-6 rounded-2xl">
      <h2 className="text-2xl font-bold mb-6">
        Career Roadmap
      </h2>

      <div className="space-y-3">
        {roadmap.map((step, index) => (
          <div
            key={index}
            className="bg-zinc-800 p-4 rounded-xl"
          >
            Step {index + 1}: {step}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Roadmaps;