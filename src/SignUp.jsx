import { useState } from "react";
import "./App.css";
import LogIn from "./LogIn";

function SignUp() {

  return (
    <>
      <div className="container mt-2">
        <h1 className="mb-2 text-center h1-font">
          <i>Welcome to Fashion Mantra Jewellery</i>
        </h1>
        <h2 className="text-left h1-font">Sign Up</h2>

          <div>
            <form>
              {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
              <div className="row mb-2">
                <div className="col">
                  <div className="form-outline">
                    <label className="form-label" htmlFor="form3Example1">
                      First name
                    </label>
                    <input
                      type="text"
                      id="form3Example1"
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="form-outline">
                    <label className="form-label" htmlFor="form3Example2">
                      Last name
                    </label>
                    <input
                      type="text"
                      id="form3Example2"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>

              {/* Distributor Name */}
              <div className="form-outline mb-2">
                <label className="form-label" htmlFor="form3Example3">
                  Distributor Name
                </label>
                <input
                  type="text"
                  id="form3Example3"
                  className="form-control"
                  required
                />
              </div>
              {/* Phone Number */}
              <div className="form-outline mb-2">
                <label className="form-label" htmlFor="form3Example4">
                  Phone Number
                </label>
                <input
                  type="number"
                  id="form3Example4"
                  className="form-control"
                  required
                />
              </div>

              {/* <!-- Email input --> */}
              <div className="form-outline mb-2">
                <label className="form-label" htmlFor="form3Example5">
                  Email address
                </label>
                <input
                  type="email"
                  id="form3Example5"
                  className="form-control"
                  required
                />
              </div>

              {/* <!-- Password input --> */}
              <div className="form-outline mb-2">
                <label className="form-label" htmlFor="form3Example6">
                  Password
                </label>
                <input
                  type="password"
                  id="form3Example6"
                  className="form-control"
                  required
                />
              </div>

              {/* <!--Confirm Password input --> */}
              <div className="form-outline mb-2">
                <label className="form-label" htmlFor="form3Example7">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="form3Example7"
                  className="form-control"
                  required
                />
              </div>

              {/* <!-- Checkbox --> */}
              <div className="form-check d-flex justify-content-left mb-2 signup-margin">
                <label className="form-check-label" htmlFor="form2Example33 ">
                  Subscribe to our newsletter
                </label>

                <input
                  className="form-check-input me-2 justify-content-center "
                  type="checkbox"
                  value=""
                  id="form3Example33"
                  aria-checked
                />
              </div>

              {/* <!-- Submit button --> */}
              <button type="submit" className="btn btn-primary btn-block mb-2">
                Sign up
              </button>

              {/* <!-- Register buttons --> */}
              <div className="text-center">
                <p>or sign up with:</p>
                <button
                  type="button"
                  className="btn btn-secondary btn-floating mx-1"
                >
                  <i className="fab fa-facebook-f"></i>
                </button>

                <button
                  type="button"
                  className="btn btn-secondary btn-floating mx-1"
                >
                  <i className="fab fa-google"></i>
                </button>

                <button
                  type="button"
                  className="btn btn-secondary btn-floating mx-1"
                >
                  <i className="fab fa-twitter"></i>
                </button>

                <button
                  type="button"
                  className="btn btn-secondary btn-floating mx-1"
                >
                  <i className="fab fa-github"></i>
                </button>

                <p className="text-center">
                  Not a member?{" "}
                  <a href="#" type="button">
                    Register
                  </a>
                </p>
              </div>
            </form>
         

         </div>
         
      </div>
    </>
  );
}
export default SignUp;
