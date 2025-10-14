import { useState } from "react";
import { Fragment } from "react";
import "../styles/section.css";
import { FaTrash } from "react-icons/fa";

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

function FieldContainer({ fields, editMode, children }) {
  return (
    <div className="fieldContainer">
      <div className="fields">
        {fields.map((field) => (
          <Field key={`${field.id}`} editMode={editMode} field={field} />
        ))}
      </div>
      {children}
    </div>
  );
}

function Section({ title, fields, editMode, canAdd = false }) {
  let [copies, setCopies] = useState([0]);
  let fieldContainers = [];

  for (let i = 0; i < copies.length; i++) {
    fieldContainers.push(
      <FieldContainer key={copies[i]} editMode={editMode} fields={fields}>
        {canAdd && editMode && <button className="deleteButton">
          <FaTrash />
        </button>}
      </FieldContainer>
    );
  }

  return (
    <div className="section">
      <h2>{title}</h2>
      {fieldContainers}

      {canAdd && editMode && (
        <button onClick={() => setCopies([...copies, copies.at(-1) + 1])}>
          Add New
        </button>
      )}
    </div>
  );
}

export { Input, Section };
