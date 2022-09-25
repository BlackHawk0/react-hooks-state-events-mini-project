import React from "react";
import Task from "./Task";

function TaskList({tasks}) {
  console.log(tasks);
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map((task) => <Task key={task.text} taskName={task} />)}
    </div>
  );
}

export default TaskList;
