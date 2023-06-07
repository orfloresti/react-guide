import React, { useState } from "react";

const styles = {
  forms: {
    width: "300px",
    display: "flex",
    flexDirection: "column",
  },
};

const App = () => {
  const [value, setValue] = useState({
    normal: "Default",
    textArea: "",
    select: "Happy",
    checked: false,
    stateRadio: "happy"
  });

  const handleChange = (e) => {
    // setValue({ ...value, [e.target.name]: e.target.value });
    setValue((state) => ({
      ...state,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    }));
  };

  console.log(value);

  return (
    <div style={styles.forms}>
      <input
        type="text"
        name="normal"
        value={value.normal}
        onChange={handleChange}
      />
      {value.normal.length < 5 ? <span>Min length 5</span> : null}

      <textarea
        name="textArea"
        onChange={handleChange}
        value={value.textArea}
      />

      <select value={value.select} name="select" onChange={handleChange}>
        <option value="">Select</option>
        <option value="Happy">Select happy</option>
        <option value="Sad">Select sad</option>
        <option value="Hungry">Select hungry</option>
      </select>

      <input
        type="checkbox"
        name="checked"
        onChange={handleChange}
        checked={value.checked}
      />

      <div>
        <label>Type</label>
        <input
          onChange={handleChange}
          type="radio"
          name="stateRadio"
          checked={value.stateRadio === "happy"}
          value="happy"
        />
        Happy
        <input
          onChange={handleChange}
          type="radio"
          name="stateRadio"
          checked={value.stateRadio === "sad"}
          value="sad"
        />
        Sad
        <input
          onChange={handleChange}
          type="radio"
          name="stateRadio"
          checked={value.stateRadio === "hungry"}
          value="hungry"
        />
        Hungry
      </div>
    </div>
  );
};

export default App;
