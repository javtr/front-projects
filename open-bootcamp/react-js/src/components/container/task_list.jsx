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
      <div className="col-12">
        <div className="card">
          <div className="card-header p-3">
            <h5>Your Task</h5>
          </div>

          <div
            className="card-body"
            data-mdb-perfect-scrollbar="true"
            style={{ position: "relative", height: "400px" }}
          >
            <table>
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Description</th>
                  <th scope="col">Level</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <TaskComponent task={defaultTask}></TaskComponent>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskListComponent;
