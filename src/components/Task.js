import React, {useState} from "react";

function Task({taskName}) {
  const [del, setDel] = useState(taskName)


  return (
    <div className="task">
      <div className="label">{taskName.category}</div>
      <div className="text">{taskName.text}</div>
      <button className="delete">X</button>
    </div>
  );
}

export default Task;
