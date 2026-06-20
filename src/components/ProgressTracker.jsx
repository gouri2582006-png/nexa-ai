import { useState } from "react";

function ProgressTracker() {
  const [tasks, setTasks] = useState([
    { name: "Complete HTML", done: false },
    { name: "Complete CSS", done: false },
    { name: "Complete JavaScript", done: false },
    { name: "Build Project", done: false },
  ]);

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].done = !updatedTasks[index].done;
    setTasks(updatedTasks);
  };

  const completed = tasks.filter((task) => task.done).length;

  const percentage = Math.round(
    (completed / tasks.length) * 100
  );

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "20px",
        borderRadius: "10px",
        marginTop: "20px",
      }}
    >
      <h2>Progress Tracker</h2>

      <h3>Career Progress: {percentage}%</h3>

      {tasks.map((task, index) => (
        <div key={index}>
          <input
            type="checkbox"
            checked={task.done}
            onChange={() => toggleTask(index)}
          />
          {" "}
          {task.name}
        </div>
      ))}
    </div>
  );
}

export default ProgressTracker;