import React, { Component } from "react";
import "./App.css";
import TaskListComponent from "./components/container/task_list";
import Ejemplo1 from "./hooks/ejemplo1";
import Ejemplo2 from "./hooks/ejemplo2";
import Ejemplo3 from "./hooks/ejemplo3";
import Ejemplo4 from "./hooks/ejemplo4";
import Ejemplo5 from "./hooks/ejemplo5";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <TaskListComponent></TaskListComponent> */}
        {/* <h2>Ejemplo Hooks 1</h2> */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <Ejemplo3></Ejemplo3> */}
        {/* <Ejemplo4></Ejemplo4> */}
        <Ejemplo5>
          <h2>Elementos del DOM enviados desde el padre</h2>
        </Ejemplo5>
      </div>
    );
  }
}

export default App;
