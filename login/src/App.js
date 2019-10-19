import React from "react";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import NaleList from "./components/NameList";
import NameList from "./components/NameList";

function App() {
  return (
    <div className="App">
      {/* <Greet name="Vishnu Sharma" title="Software Engineer">
       
      </Greet>

      <Welcome name="Vishnu Sharma" title="Software Engineer" />

      <Welcome name="==="  title="|||| ====" />

      <Hello />

      <Message />

      <Counter/>

      <FunctionClick/>

      <ClassClick/>

      <EventBind/> */}

      {/* <ParentComponent/> */}

      <NameList/>

    </div>
  );
}

export default App;
