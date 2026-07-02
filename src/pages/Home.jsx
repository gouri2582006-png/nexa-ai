function Home({ profile, profileCompletion, setPage }) {
  return (
    <div className="space-y-8">

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8">
        <h1 className="text-4xl font-bold">
          Welcome {profile.name || "Student"} 👋
        </h1>

        <p className="mt-3 text-lg">
          Your Personal AI Career Guidance Dashboard
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">

        <div className="bg-zinc-900 rounded-2xl p-5">
          <h3 className="text-zinc-400">Profile Completion</h3>
          <p className="text-3xl font-bold mt-2">
            {profileCompletion}%
          </p>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-5">
          <h3 className="text-zinc-400">Career Goal</h3>
          <p className="text-xl font-semibold mt-2">
            {profile.careerGoal || "Not Set"}
          </p>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-5">
          <h3 className="text-zinc-400">Skills</h3>
          <p className="text-3xl font-bold mt-2">
            {profile.skills
              ? profile.skills.split(",").length
              : 0}
          </p>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-5">
          <h3 className="text-zinc-400">AI Status</h3>
          <p className="text-green-400 text-2xl font-bold mt-2">
            Active ✅
          </p>
        </div>

      </div>

      <div className="bg-zinc-900 rounded-2xl p-6">

        <h2 className="text-2xl font-bold mb-5">
          🚀 Quick Actions
          <div className="bg-zinc-900 rounded-2xl p-6 mt-8">

  <h2 className="text-2xl font-bold mb-4">
    🎯 Today's Goal
  </h2>

  <div className="space-y-3">

    <div className="flex justify-between">
      <span>Complete Profile</span>
      <span>{profileCompletion}%</span>
    </div>

    <div className="w-full bg-zinc-700 rounded-full h-3">
      <div
        className="bg-blue-600 h-3 rounded-full"
        style={{ width: `${profileCompletion}%` }}
      ></div>
    </div>

    <p className="text-zinc-400">
      Complete your profile to receive better AI recommendations.
    </p>

  </div>

</div>
<div className="grid md:grid-cols-3 gap-5 mt-8">

  <div className="bg-zinc-900 rounded-2xl p-5">
    <h3 className="font-bold text-xl">
      🤖 AI Mentor
    </h3>

    <p className="text-zinc-400 mt-2">
      Personalized career guidance powered by Gemini AI.
    </p>
  </div>

  <div className="bg-zinc-900 rounded-2xl p-5">
    <h3 className="font-bold text-xl">
      📄 Resume Analyzer
    </h3>

    <p className="text-zinc-400 mt-2">
      Upload your resume and receive ATS analysis.
    </p>
  </div>

  <div className="bg-zinc-900 rounded-2xl p-5">
    <h3 className="font-bold text-xl">
      🎯 Career Match
    </h3>

    <p className="text-zinc-400 mt-2">
      Discover careers based on your skills and interests.
    </p>
  </div>

</div>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          <button
            onClick={() => setPage("aimentor")}
            className="bg-blue-600 hover:bg-blue-700 rounded-xl py-3"
          >
            AI Mentor
          </button>

          <button
            onClick={() => setPage("resume")}
            className="bg-green-600 hover:bg-green-700 rounded-xl py-3"
          >
            Resume
          </button>

          <button
            onClick={() => setPage("roadmaps")}
            className="bg-purple-600 hover:bg-purple-700 rounded-xl py-3"
          >
            Roadmap
          </button>

          <button
            onClick={() => setPage("interview")}
            className="bg-orange-600 hover:bg-orange-700 rounded-xl py-3"
          >
            Interview
          </button>

        </div>

      </div>

    </div>
  );
}
<div className="text-center text-zinc-500 py-8">

  Made with ❤️ using React + Gemini AI

</div>

export default Home;