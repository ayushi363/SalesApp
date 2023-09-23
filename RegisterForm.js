import React from "react";

export default function RegisterForm() {
  return (
    <div className="container shadow p-4 mb-5 bg-body-tertiary rounded">
      <h1>REGISTRATION FORM</h1>
      <form>
        {/* input field */}
        <div className="mb-4">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
          />
        </div>
        {/* input field */}
        <div className="mb-4">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
          />
        </div>
        {/* email field */}
        <div className="mb-4">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
          />
        </div>
        {/* password field */}
        <div className="mb-4">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
          />
        </div>
        {/* button */}
        <div className="mb-4">
          <button type="submit" className="btn btn-primary form-control">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
