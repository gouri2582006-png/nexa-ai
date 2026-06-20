function Profile({ profile, setProfile }) {
  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-zinc-900 p-6 rounded-2xl">
      <h2 className="text-2xl font-bold mb-6">
        Student Profile
      </h2>

      <div className="space-y-4">
        <input
          name="name"
          placeholder="Full Name"
          value={profile.name}
          onChange={handleChange}
          className="w-full bg-zinc-800 p-3 rounded-xl"
        />

        <input
          name="qualification"
          placeholder="Qualification"
          value={profile.qualification}
          onChange={handleChange}
          className="w-full bg-zinc-800 p-3 rounded-xl"
        />

        <input
          name="skills"
          placeholder="Skills (comma separated)"
          value={profile.skills}
          onChange={handleChange}
          className="w-full bg-zinc-800 p-3 rounded-xl"
        />

        <input
          name="interests"
          placeholder="Interests"
          value={profile.interests}
          onChange={handleChange}
          className="w-full bg-zinc-800 p-3 rounded-xl"
        />

        <input
          name="careerGoal"
          placeholder="Career Goal"
          value={profile.careerGoal}
          onChange={handleChange}
          className="w-full bg-zinc-800 p-3 rounded-xl"
        />
      </div>
    </div>
  );
}

export default Profile;