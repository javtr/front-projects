import React, { Component } from "react";
import "./App.css";
import TaskListComponent from "./components/container/task_list";


class App extends Component {
  render() {
    return (
      <div className="App">
      <TaskListComponent></TaskListComponent>
      </div>
    );
  }
}

export default App;
