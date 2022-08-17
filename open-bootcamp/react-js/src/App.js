import React, { Component } from "react";
import "./App.css";
import LifeCycleClass from "./hooks/lifeCycle/lifecycleClass";
import LifeCycleFunction from "./hooks/lifeCycle/lijecycleFunction";


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <LifeCycleClass></LifeCycleClass> */}
        <LifeCycleFunction></LifeCycleFunction>
      </div>
    );
  }
}

export default App;
