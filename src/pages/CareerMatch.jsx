function CareerMatch({ profile }) {
  const careers = [];

  const goal = profile.careerGoal.toLowerCase();

  if (goal.includes("frontend")) {
    careers.push("Frontend Developer");
    careers.push("React Developer");
  }

  if (goal.includes("data")) {
    careers.push("Data Analyst");
    careers.push("Data Scientist");
  }

  if (goal.includes("full")) {
    careers.push("Full Stack Developer");
  }

  return (
    <div className="bg-zinc-900 p-6 rounded-2xl">
      <h2 className="text-2xl font-bold mb-6">
        Career Matches
      </h2>

      {careers.length === 0 ? (
        <p>Add a career goal in Profile.</p>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {careers.map((career, index) => (
            <div
              key={index}
              className="bg-zinc-800 p-4 rounded-xl"
            >
              {career}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CareerMatch;