function StudentForm({ formData, setFormData }) {
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "20px",
        borderRadius: "10px",
        marginBottom: "20px",
      }}
    >
      <h2>Student Information</h2>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        style={{ width: "100%", padding: "10px" }}
      />

      <br /><br />

      <input
        type="text"
        name="qualification"
        placeholder="Qualification"
        value={formData.qualification}
        onChange={handleChange}
        style={{ width: "100%", padding: "10px" }}
      />

      <br /><br />

      <input
        type="text"
        name="skills"
        placeholder="Skills"
        value={formData.skills}
        onChange={handleChange}
        style={{ width: "100%", padding: "10px" }}
      />

      <br /><br />

      <input
        type="text"
        name="interests"
        placeholder="Interests"
        value={formData.interests}
        onChange={handleChange}
        style={{ width: "100%", padding: "10px" }}
      />

      <br /><br />

      <input
        type="text"
        name="careerGoal"
        placeholder="Career Goal"
        value={formData.careerGoal}
        onChange={handleChange}
        style={{ width: "100%", padding: "10px" }}
      />
    </div>
  );
}

export default StudentForm;