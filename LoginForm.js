import React from "react";
export default function LoginForm() {
  //   const [email, setEmail] = useState();
  return (
    <div className="container shadow p-4 mb-5 bg-body-tertiary rounded">
      <h1>LOGIN FORM</h1>
      <form>
        {/* email input field */}
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
        {/* password input field */}
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
