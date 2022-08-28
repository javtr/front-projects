import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";
import "../../styles/task.scss";
import { LEVELS } from "../../models/levels.enum";

function TaskComponent({ task, completed, remove }) {
  useEffect(() => {
    console.log("tarea creada");
    return () => {
      console.log(`la tarea ${task.name} fue desmontada`);
    };
  }, [task]);

  function taskLevelBadge() {
    switch (task.level) {
      case LEVELS.NORMAL:
        return (
          <h6 className="mb-0">
            <span className="badge bg-primary">{task.level}</span>
          </h6>
        );
      case LEVELS.URGENT:
        return (
          <h6 className="mb-0">
            <span className="badge bg-warning">{task.level}</span>
          </h6>
        );
      case LEVELS.BLOCKING:
        return (
          <h6 className="mb-0">
            <span className="badge bg-danger">{task.level}</span>
          </h6>
        );
      default:
        break;
    }
  }

  function taskCompleted() {
    if (task.completed) {
      return (
        <i
          onClick={() => completed(task)}
          className="bi-toggle-on"
          style={{ color: "green" }}
        ></i>
      );
    } else {
      return (
        <i
          onClick={() => completed(task)}
          className="bi-toggle-off"
          style={{ color: "red" }}
        ></i>
      );
    }
  }

  return (
      <tr className="fw-normal">
        <th>
          <span className="ms-2">{task.name}</span>
        </th>
        <td className="align-middle">
          <span>{task.description}</span>
        </td>
        <td className="align-middle">{taskLevelBadge()}</td>
        <td className="align-middle">
          {taskCompleted()}
          <i
            onClick={() => remove(task)}
            className="bi-trash"
            style={{ color: "tomato" }}
          ></i>
        </td>
      </tr>
  );
}

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task),
};

export default TaskComponent;
