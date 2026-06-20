function Courses({ profile }) {
  const getRecommendations = () => {
    const qualification = profile.qualification.toLowerCase();
    const interests = profile.interests.toLowerCase();

    if (
      qualification.includes("bca") ||
      qualification.includes("btech") ||
      interests.includes("web")
    ) {
      return [
        "Frontend Developer",
        "Backend Developer",
        "Full Stack Developer",
        "UI/UX Designer",
      ];
    }

    if (
      interests.includes("data") ||
      interests.includes("analytics")
    ) {
      return [
        "Data Analyst",
        "Data Scientist",
        "Business Analyst",
      ];
    }

    return [
      "Digital Marketer",
      "Business Analyst",
      "Project Coordinator",
    ];
  };

  const careers = getRecommendations();

  return (
    <div className="bg-zinc-900 p-6 rounded-2xl">
      <h2 className="text-2xl font-bold mb-6">
        Career Recommendations
      </h2>

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
    </div>
  );
}

export default Courses;