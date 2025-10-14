import { useState } from "react";
import { Fragment } from "react";
import "../styles/section.css";
import { FaTrash, FaPlus } from "react-icons/fa";

function Input({ field, editMode, className }) {
  let [value, setValue] = useState("");
  let {_, ...fieldWithoutId} = field;
  
  if (editMode) {
    return (
      <>
        <input
          className={className}
          {...fieldWithoutId}
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
      <Input className="fieldInput" field={field} editMode={editMode} />{" "}
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
  let canAddInEditMode = canAdd && editMode;

  function deleteFieldContainer(deleteId) {
    let newCopies = copies.filter((id) => id !== deleteId);
    setCopies(newCopies);
  }

  for (let i = 0; i < copies.length; i++) {
    fieldContainers.push(
      <FieldContainer key={copies[i]} editMode={editMode} fields={fields}>
        {canAddInEditMode && (
          <button
            className="deleteButton"
            onClick={() => deleteFieldContainer(copies[i])}
          >
            <FaTrash />
          </button>
        )}
      </FieldContainer>
    );
  }

  return (
    <div className="section">
      <h2>{title}</h2>
      {fieldContainers}

      {canAddInEditMode && (
        <button onClick={() => setCopies([...copies, copies.at(-1) + 1])}>
          <FaPlus />
        </button>
      )}
    </div>
  );
}

export { Input, Section };
