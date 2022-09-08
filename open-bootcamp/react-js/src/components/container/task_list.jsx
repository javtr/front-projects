import React, { useState, useEffect } from "react";
import { Task } from "../../models/task.class";
import { LEVELS } from "../../models/levels.enum";
import TaskComponent from "../pure/task";
import TaskForm from "../../components/pure/forms/taskForm";

const TaskListComponent = () => {
  const taskArray = [
    new Task("tarea 1", "default description", true, LEVELS.BLOCKING),
    new Task("2", "ak,jjfdsjklflk", false, LEVELS.URGENT),
    new Task("tercera", "description", true, LEVELS.NORMAL),
  ];

  // estado del componente
  const [tasks, setTasks] = useState(taskArray);
  const [loading, setLoading] = useState(true);

  // ciclo de vida del componente
  useEffect(() => {
    console.log("el componente fue actualizado");
    setLoading(false);
    return () => {
      console.log("el componente fue desmontado");
    };
  }, [tasks]);

  function updateCompleted(task) {
    const taskIndex = tasks.indexOf(task);
    const taskTemp = [...tasks];
    taskTemp[taskIndex].completed = !taskTemp[taskIndex].completed;
    setTasks(taskTemp);
  }

  function deleteTask(task) {
    const taskIndex = tasks.indexOf(task);
    const taskTemp = [...tasks];
    taskTemp.splice(taskIndex, 1);
    setTasks(taskTemp);
  }

  function addTask(task) {
    const taskTemp = [...tasks];
    taskTemp.push(task);
    setTasks(taskTemp);
  }


  const TaskSection = () => {
    return (
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
          {tasks.map((task, index) => {
            return (
              <TaskComponent
                key={index}
                task={task}
                completed={updateCompleted}
                remove={deleteTask}
              ></TaskComponent>
            );
          })}
        </tbody>
      </table>
    );
  };

  let taskRender;

  if(tasks.length>0){
    taskRender = <TaskSection></TaskSection>
  }else{
    taskRender = <h2>No hay tareas</h2>
  }



  return (
    <div>
      <div className="col-12">
        <div className="card">
          <div className="card-header p-3">
            <h5>Your Task</h5>
          </div>
          {taskRender}
          <div
            className="card-body"
            data-mdb-perfect-scrollbar="true"
            style={{ position: "relative", height: "400px" }}
          ></div>
        </div>
        <TaskForm add={addTask} countTask={tasks.length}></TaskForm>
      </div>
    </div>
  );
};

export default TaskListComponent;
