import { useState } from "react";
// import reactLogo from './assets/react.svg'
import "./App.css";
import { Input, Section } from "./components/Section.jsx";
import { generalFields, educationalFields, practicalFields } from "./data/generalFields.js";

function App() {
  const [editMode, setEditMode] = useState(true);

  return (
    <>
      <h1>Resume Builder</h1>
      <button onClick={() => setEditMode(!editMode)}>
          {editMode ? "Publish" : "Edit"}
        </button>
      <Section title="General Information" fields={generalFields} editMode={editMode}></Section>
      <Section title="Educational Experience" fields={educationalFields} editMode={editMode} canAdd={true}></Section>
      <Section title="Practical Experience" fields={practicalFields} editMode={editMode} canAdd={true} />
    </>
  );
}

export default App;
