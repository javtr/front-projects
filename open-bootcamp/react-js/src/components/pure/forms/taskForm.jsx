import React, { useRef } from "react";
import { LEVELS } from "../../../models/levels.enum";
import { Task } from "../../../models/task.class";

export default function TaskForm({ add }) {
  const nameRef = useRef("");
  const descriptionRef = useRef("");
  const levelRef = useRef(LEVELS.NORMAL);

  function addTask(e) {
    e.preventDefault();

    const newTask = new Task(
      nameRef.current.value,
      descriptionRef.current.value,
      false,
      levelRef.current.value
    );

    add(newTask);
  }

  return (
    <div>
      <form onSubmit={addTask} className='d-flex justify-content-center align-items-center'>
        <div className="form-outline flex-fill">

          <input ref={nameRef} placeholder='Title' id="inputName" type="text" className="form-control form-control-lg"/>
          <input ref={descriptionRef} placeholder='Description' id="inputDescription" type="text" className="form-control form-control-lg"/>
          <label htmlFor="selectLevel" className="sr-only">priority</label>
          <select ref={levelRef} defaultValue={LEVELS.NORMAL} id="selectLevel">
            <option value={LEVELS.NORMAL}>normal</option>
            <option value={LEVELS.BLOCKING}>blocking</option>
            <option value={LEVELS.URGENT}>urgent</option>
          </select>
          <button type="submit" className="btn btn-lg btn-success ms-2">Add</button>

        </div>
      </form>
    </div>
  );
}
