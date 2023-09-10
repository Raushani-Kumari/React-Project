import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailerror, setEmailError] = useState("");
  const [passworderror, setPasswordError] = useState("");

  function handleEmail(event) {
    const new_mail = event.target.value;
    setEmail(new_mail);

    // regx for email validation
    var email_regx = "^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{3,3})$";

    if (new_mail.match(email_regx)) {
      setEmailError("");
    } else {
      setEmailError("Please enter valid email");
    }
  }

  function handlePassword(event){
    const pass = event.target.value;
    setPassword(pass);

    // regx for password validation
    var lowerCase = /[a-z]/g;
    var upperCase = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if(!pass.match(lowerCase)){
      setPasswordError("Password should contain lowercase letters!");
    }else if(!pass.match(upperCase)){
      setPasswordError("Password should contain uppercase letters!");
    } else if(!pass.match(numbers)){
      setPasswordError("Password should contain numbers also!");
    }
    else if(pass.length < 6){
      setPasswordError("Password should contain atleast 6 characters!")
    }
    else {
      setPasswordError("");
    }
  }

  return (
    <>
      <h1 className="mb-4 mt-4 text-center h1-font">
        <i>Welcome to Fashion Mantra Jewellery</i>
      </h1>
      <div className="container login mt-2">
        <h2 className="text-center mb-3 subheading">LogIn</h2>
        <hr />
        <div>
          <form className="novalidate">
            <div className="form-outline mb-2">
              <label className="form-label" htmlFor="form3Example15">
                Email<label style={{ color: "red" }}>*</label>
              </label>
              <input
                type="email"
                value={email}
                onChange={handleEmail}
                id="form3Example9"
                className="form-control"
                required
              />
            </div>
            {emailerror && <div style={{ color: "red" }}>{emailerror}</div>}
            {/* <!-- Password input --> */}
            <div className="form-outline mb-2">
              <label className="form-label" htmlFor="form3Example16">
                Password<label style={{ color: "red" }}>*</label>
              </label>
              <input
                type="password"
                value={password}
                onChange={handlePassword}
                id="form3Example10"
                className="form-control"
                required
              />
            </div>
            {passworderror && <div style={{ color: "red" }}>{passworderror}</div>}

            {/* <!-- Checkbox --> */}
            <div className="form-check d-flex justify-content-left mb-2 ">
              <label
                className="justify-content-center form-check-label mb-4"
                htmlFor="form4Example33 "
              >
                Remember Me
              </label>

              <input
                className="form-check-input me-2 justify-content-center"
                type="checkbox"
                value=""
                id="form5Example11"
                aria-checked
              />
            </div>

            {/* <!-- Submit button --> */}
            <button type="submit" className="btn btn-primary btn-block mb-2">
              Log in
            </button>
            {/* <!-- Register buttons --> */}
            {/* <div className="text-center">
              <p className="mt-3 mb-3">or register with:</p>
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
            </div> */}
            <p className="text-center mt-3">
              New member?{" "}
              <Link to="/">Create new account</Link>
              {/* <a href="#" type="button">
                Create new account
              </a> */}
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
export default LogIn;
