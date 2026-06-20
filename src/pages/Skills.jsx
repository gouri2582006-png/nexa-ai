function Skills({ profile }) {
  const skills =
    profile.skills
      ?.split(",")
      .map((skill) => skill.trim())
      .filter((skill) => skill !== "") || [];

  return (
    <div className="bg-zinc-900 p-6 rounded-2xl">
      <h2 className="text-2xl font-bold mb-6">
        Skills Overview
      </h2>

      {skills.length === 0 ? (
        <p className="text-zinc-400">
          No skills added yet. Add skills in Profile.
        </p>
      ) : (
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-blue-600 px-4 py-2 rounded-xl"
            >
              {skill}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Skills;