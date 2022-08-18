import React, { useState, useEffect } from "react";
import { Task } from "../../models/task.class";
import { LEVELS } from "../../models/levels.enum";
import TaskComponent from "../pure/task";

const TaskListComponent = () => {
  const defaultTask = new Task(
    "example",
    "default description",
    false,
    LEVELS.NORMAL
  );

  // estado del componente
  const [tasks, setTasks] = useState(defaultTask);
  const [loading, setLoading] = useState(true);

  // ciclo de vida del componente
  useEffect(() => {
    console.log("el componente fue actualizado");
    setLoading(false);
    return () => {
      console.log("el componente fue desmontado");
    };
  }, [tasks]);

  return (
    <div>
      <h1>Your Task</h1>
      <TaskComponent task={defaultTask}></TaskComponent>
    </div>
  );
};

export default TaskListComponent;
