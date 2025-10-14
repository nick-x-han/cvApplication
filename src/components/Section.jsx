import { useState } from "react";
import { Fragment } from "react";
import "../styles/section.css";

function Input({ type, name, editMode, className }) {
  let [value, setValue] = useState("");
  if (editMode) {
    return (
      <>
        <input
          className={className}
          type={type}
          name={name}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          autoComplete="true"
        />
      </>
    );
  } else {
    return (
      <>
        <span className={className}>
          {value.length > 0 ? value : <i>Nothing provided here</i>}
        </span>
      </>
    );
  }
}

function Field({ field, editMode }) {
  return (
    <div className="field">
      <span className="fieldName">{field.name}:</span>{" "}
      <Input
        className="fieldInput"
        type={field.type}
        name={field.name}
        editMode={editMode}
      />{" "}
    </div>
  );
}

function FieldContainer({fields, editMode}) {
    return <div className="fieldContainer">
        {fields.map((field) => (
          <Field
            key={`${field.id}`}
            editMode={editMode}
            field={field}
          />
        ))}
      </div>
}

function Section({ title, fields, editMode, canAdd = false }) {
  let [copies, setCopies] = useState(1);
  let fieldContainers = [];

  for (let i = 0; i < copies; i++) {
    fieldContainers.push(
      <FieldContainer key={i} editMode={editMode} fields={fields}></FieldContainer>
    );
  }

  return (
    <div className="section">
      <h2>{title}</h2>
      {fieldContainers}

      {canAdd && <button onClick={() => setCopies(copies + 1)}>Add New</button>}
    </div>
  );
}

export { Input, Section };
