import { useState } from "react";
// import reactLogo from './assets/react.svg'
import "./App.css";
import { Input, Section } from "./components/Section.jsx";
import { generalFields } from "./data/generalFields.js";

function App() {
  const [editMode, setEditMode] = useState(true);

  return (
    <>
      <h1>Resume Builder</h1>
      <button onClick={() => setEditMode(!editMode)}>
          {editMode ? "Publish" : "Edit"}
        </button>
      <Section title="General Information" fields={generalFields} editMode={editMode}></Section>
      <Section title="Educational Experience" fields={generalFields} editMode={editMode} canAdd={true}></Section>
    </>
  );
}

export default App;
