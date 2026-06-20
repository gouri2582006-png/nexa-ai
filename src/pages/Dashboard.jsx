function Dashboard() {
  return (
    <>
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-zinc-900 p-6 rounded-2xl">
          <h3>Profile Completion</h3>
          <p className="text-3xl font-bold mt-2">72%</p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl">
          <h3>Career Matches</h3>
          <p className="text-3xl font-bold mt-2">12</p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl">
          <h3>Courses Suggested</h3>
          <p className="text-3xl font-bold mt-2">8</p>
        </div>
      </div>

      <div className="bg-zinc-900 p-6 rounded-2xl">
        <h2 className="text-xl font-bold mb-4">
          Welcome to Skill Graph Navigator
        </h2>

        <p>
          Get career suggestions, roadmaps,
          skill tracking and reports.
        </p>
      </div>
    </>
  );
}

export default Dashboard;