import React, { useState } from "react";

const Radiobox = ({ prices, handleFilters }) => {
  const [setValue] = useState(0);

  const handleChange = (e) => {
    handleFilters(e.target.value);
    console.log(e.target.value);
    setValue(e.target.value);
  };

  return (
    <>
      {prices.map((price, i) => (
        <div key={i}>
          <input
            onChange={handleChange}
            value={`${price._id}`}
            name={price}
            type="radio"
            className="mr-2 ml-4"
          />
          <label className="form-check-label">{price.name}</label>
        </div>
      ))}
    </>
  );
};

export default Radiobox;
