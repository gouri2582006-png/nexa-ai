function Reports({ profile }) {
  return (
    <div className="bg-zinc-900 p-6 rounded-2xl">
      <h2 className="text-2xl font-bold mb-6">
        Student Report
      </h2>

      <div className="space-y-3 mb-6">
        <p>
          <strong>Name:</strong>{" "}
          {profile?.name || "Not Provided"}
        </p>

        <p>
          <strong>Qualification:</strong>{" "}
          {profile?.qualification || "Not Provided"}
        </p>

        <p>
          <strong>Skills:</strong>{" "}
          {profile?.skills || "Not Provided"}
        </p>

        <p>
          <strong>Interests:</strong>{" "}
          {profile?.interests || "Not Provided"}
        </p>

        <p>
          <strong>Career Goal:</strong>{" "}
          {profile?.careerGoal || "Not Provided"}
        </p>
      </div>

      <button
        onClick={() => window.print()}
        className="bg-green-600 px-5 py-3 rounded-xl"
      >
        Download Report
      </button>
    </div>
  );
}

export default Reports;