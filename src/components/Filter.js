import React, { useState, useEffect } from "react";
import Checkbox from "./Checkbox";

const Filter = () => {
  const [myFilters, setMyFilters] = useState({
    filters: { category: [], price: [] },
  });

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/products/categories`)
      .then((res) => res.json())
      .then((json) => {
        // console.log(json.data);
        setCategories(json.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-4">
          <h4>Filter by categories</h4>
          <ul>
            {/* {categories.map((cat) => cat)} */}
            <Checkbox
              categories={categories}
              // handleFilters={(filters) => handleFilters(filters, "category")}
            />
          </ul>

          {/* <h4>Filter by price range</h4>
          <div>
            <input
               onChange={handleChange}
             value={`${p._id}`}
              name="{p}"
              type="radio"
              className="mr-2 ml-4"
            />
            <label className="form-check-label">ssssss</label>
          </div>*/}
        </div>

        {/* <div className="col-8">
          <h2 className="mb-4">Products</h2>
          <div className="row">
            {filteredResults.map((product, i) => (
              <div key={i} className="col-4 mb-3">
                <Card product={product} />
              </div>
            ))}
          </div>
          <hr />
          {loadMoreButton()}
        </div> */}
      </div>
    </>
  );
};

export default Filter;
