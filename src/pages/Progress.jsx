import { useState } from "react";

function Progress() {
  const [tasks, setTasks] = useState([
    { name: "Learn HTML", completed: false },
    { name: "Learn CSS", completed: false },
    { name: "Learn JavaScript", completed: false },
    { name: "Learn React", completed: false },
    { name: "Build Portfolio", completed: false },
  ]);

  const toggleTask = (index) => {
    const updated = [...tasks];

    updated[index].completed =
      !updated[index].completed;

    setTasks(updated);
  };

  const completedTasks =
    tasks.filter((task) => task.completed).length;

  const percentage = Math.round(
    (completedTasks / tasks.length) * 100
  );

  return (
    <div className="bg-zinc-900 p-6 rounded-2xl">
      <h2 className="text-2xl font-bold mb-6">
        Progress Tracker
      </h2>

      <div className="mb-6">
        <p className="text-lg">
          Overall Progress: {percentage}%
        </p>
      </div>

      <div className="space-y-3">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="bg-zinc-800 p-4 rounded-xl flex items-center gap-3"
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() =>
                toggleTask(index)
              }
            />

            <span>{task.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Progress;