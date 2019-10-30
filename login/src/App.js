import React from "react";
import "./App.css";
// import Greet from "./components/Greet";
// import Welcome from "./components/Welcome";
// import Hello from "./components/Hello";
// import Message from "./components/Message";
// import Counter from "./components/Counter";
// import FunctionClick from "./components/FunctionClick";
// import ClassClick from "./components/ClassClick";
// import EventBind from "./components/EventBind";
// import ParentComponent from "./components/ParentComponent";
// import NaleList from "./components/NameList";
// import NameList from "./components/NameList";
// import Hero from "./components/error/Hero";
// import ErrorBoundary from "./components/error/ErrorBoundary";
import ClickCounter from "./adv-component/ClickCounter";
import HowerCounter from "./adv-component/HowerCounter";
import ClickCounter2 from "./adv-component/ClickCounter2";
import HoverCount2 from "./adv-component/HoverCount2";
import User from "./adv-component/User";
import Counter2 from "./adv-component/Counter2";
import RefsDemo from "./refs/RefsDemo";
import FocusInput from "./refs/FocusInput";
import FRParentInput from "./refs/FRParentInput";


function App() {
  return (
    <div className="App">
      <FRParentInput/>
      {/* <FocusInput/> */}
      {/* <RefsDemo/> */}

    </div>
  );
}

export default App;
