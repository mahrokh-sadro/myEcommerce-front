import React, { useState, useEffect } from "react";

const Checkbox = ({ categories }) => {
  const [checked, setChecked] = useState([]);

  return (
    <>
      {/* {categories.map((cat) => cat)} */}
      {categories.map((cat, i) => (
        <li key={i} className="list-unstyled">
          <input
            // onChange={handleToggle(c._id)}
            // value={checked.indexOf(c._id === -1)}
            type="checkbox"
            className="form-check-input"
          />
          <label className="form-check-label">{cat}</label>
        </li>
      ))}
    </>
  );
};

export default Checkbox;
