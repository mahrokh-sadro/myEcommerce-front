import React, { useState, useEffect } from "react";

const Radiobox = ({ prices, handleFilters }) => {
  const [value, setValue] = useState(0);

  const handleChange = (e) => {
    handleFilters(e.target.value);
    console.log(e.target.value);
    setValue(e.target.value);
  };

  return (
    <>
      {/* {JSON.stringify(prices)} */}
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
