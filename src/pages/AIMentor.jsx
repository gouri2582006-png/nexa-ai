function AIMentor() {
  return (
    <div className="bg-zinc-900 p-6 rounded-2xl">
      <h2 className="text-2xl font-bold mb-4">
        AI Career Mentor
      </h2>

      <input
        placeholder="Ask anything..."
        className="w-full bg-zinc-800 p-3 rounded-xl"
      />

      <div className="mt-6">
        <p>
          Example:
        </p>

        <ul className="mt-2 space-y-2">
          <li>What career suits me?</li>
          <li>What should I learn next?</li>
          <li>Can I become a Data Analyst?</li>
        </ul>
      </div>
    </div>
  );
}

export default AIMentor;