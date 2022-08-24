import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";
import "../../styles/task.scss";

function TaskComponent({ task }) {
  useEffect(() => {
    console.log("tarea creada");
    return () => {
      console.log(`la tarea ${task.name} fue desmontada`);
    };
  }, [task]);

  return (
    <tr className="fw-normal">
      <th>
        <span className="ms-2">{task.name}</span>
      </th>
      <td className="align-middle">
        <span>{task.description}</span>
      </td>
      <td className="align-middle">
        <span>{task.level}</span>
      </td>
      <td className="align-middle">
        <span>{task.completed? 'Completed':'Pending'}</span>
      </td>
    </tr>
  );
}

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task),
};

export default TaskComponent;
