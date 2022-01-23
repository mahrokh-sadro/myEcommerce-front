import React, { useState, useEffect } from "react";

const Checkbox = ({ categories, handleFilters }) => {
  const [checked, setChecked] = useState([]);

  const handleToggle = (c) => () => {
    const CurrentCatId = checked.indexOf(c);
    const newCheckedCatId = [...checked];
    // console.log(CurrentCatId);
    if (CurrentCatId === -1) {
      newCheckedCatId.push(c);
    } else {
      newCheckedCatId.splice(CurrentCatId, 1);
    }
    // console.log(newCheckedCatId);
    setChecked(newCheckedCatId);
    // console.log(checked);
    handleFilters(newCheckedCatId);
  };

  return (
    <>
      {/* {categories.map((cat) => cat)} */}
      {categories.map((cat, i) => (
        <li key={i} className="list-unstyled">
          <input
            // onChange={handleToggle(c._id)}
            onChange={handleToggle(cat)}
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
