import React from "react";

export default function ShowSales() {
  return (
    <div className="container shadow p-4 mb-5 bg-body-tertiary rounded">
      <h1>TOP 5 SALES</h1>
      {/* table  */}
      <table className="table">
        <thead>
          {/* column */}
          <tr>
            <th scope="col">#</th>
            <th scope="col">Sales Id:</th>
            <th scope="col">Product Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Sale Amount</th>
          </tr>
        </thead>
        {/* row */}
        <tbody className="table-group-divider">
          <tr>
            <th scope="row">1</th>
            <td>SI212</td>
            <td>Laptop</td>
            <td>2</td>
            <td>90000</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>SI423</td>
            <td>Mobile</td>
            <td>5</td>
            <td>80000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
