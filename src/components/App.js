import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [toDisplay, setToDisplay] = useState("All")
  const [task, setTask] = useState(TASKS)

  const displayTasks= task.filter(
      (item) => toDisplay === "All" || item.toDisplay === toDisplay
    );

  function deleteTask(toBeDeleted){
    setTask(task.filter(item => item.text !== toBeDeleted))
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES}
      selectedCategory={toDisplay}
      onSelectCategory={setToDisplay}/>
      <NewTaskForm />
      <TaskList del={deleteTask} 
      tasks={displayTasks} />
    </div>
  );
}

export default App;
