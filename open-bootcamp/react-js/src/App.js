import React, { Component } from "react";
import "./App.css";
import Father from "./components/container/father";
import TaskListComponent from "./components/container/task_list";
import Greetingstyled from "./components/greetingStiled";
import LoginFormik from "./components/pure/forms/loginFormik";



class App extends Component {
  render() {
    return (
      <div className="App">
      {/* <Father></Father> */}
      {/* <TaskListComponent></TaskListComponent> */}
      <LoginFormik></LoginFormik>
      {/* <Greetingstyled name={"pepe"}></Greetingstyled> */}
      </div>
    );
  }
}

export default App;
