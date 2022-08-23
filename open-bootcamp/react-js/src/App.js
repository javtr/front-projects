import React, { Component } from "react";
import "./App.css";
import TaskListComponent from "./components/container/task_list";
import Greetingstyled from "./components/greetingStiled";



class App extends Component {
  render() {
    return (
      <div className="App">
      <TaskListComponent></TaskListComponent>
      {/* <Greetingstyled name={"pepe"}></Greetingstyled> */}
      </div>
    );
  }
}

export default App;
