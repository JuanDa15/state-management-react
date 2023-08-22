import { ClassState } from "../components/ClassState";
import UseReducer from "../components/UseReducer";
import { UseState } from "../components/UseState";
import './App.css';

export default function App() {
  return (
    <div className="container">
      <UseState name="useState" />
      <div className="separator"/>
      <ClassState name="classState" />
      <div className="separator"/>
      <UseReducer name="useReducer" />
    </div>
  )
}