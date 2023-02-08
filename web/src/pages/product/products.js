import React from "react";

const products = () => {
  return (
    <div>
      <Col xs={9} sm={9} md={9} lg={9} className="form-group">
        <form>
          <div className="input-group input-group-lg">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-describedby="inputGroup-sizing-lg"
              aria-label="Search"
            ></input>
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </div>
        </form>
      </Col>
    </div>
  );
};

export default products;
