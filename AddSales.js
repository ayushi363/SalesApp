import React from "react";
export default function AddSales() {
  return (
    <div className="container shadow p-4 mb-5 bg-body-tertiary rounded">
      <h1>ADD SALE ENTRY</h1>
      <form>
        <div className="mb-4">
          <label htmlFor="productName" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            className="form-control"
            id="productName"
            name="productName"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="quantity" className="form-label">
            Quantity
          </label>
          <input
            type="number"
            className="form-control"
            id="quantity"
            name="quantity"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            type="number"
            className="form-control"
            id="amount"
            name="amount"
          />
        </div>
        <div className="mb-4">
          <button type="submit" className="btn btn-primary form-control">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
