import React, { useState } from "react";

const Checkbox = ({ categories, handleFilters }) => {
  const [checked, setChecked] = useState([]);

  const handleToggle = (c) => () => {
    const CurrentCatId = checked.indexOf(c);
    const newCheckedCatId = [...checked];
    if (CurrentCatId === -1) {
      newCheckedCatId.push(c);
    } else {
      newCheckedCatId.splice(CurrentCatId, 1);
    }
    setChecked(newCheckedCatId);
    handleFilters(newCheckedCatId);
  };

  return (
    <>
      {categories.map((cat, i) => (
        <li key={i} className="list-unstyled">
          <input
            onChange={handleToggle(cat)}
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
