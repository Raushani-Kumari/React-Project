import { useState } from "react";
import "./App.css";

function SignUp() {
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [dname, setDName] = useState("");
  const [phone,setPhone] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const [fnameerror, setFNameError] = useState("");
  const [lnameerror, setLNameError] = useState("");
  const [dnameerror, setDNameError] = useState("");
  const [phoneerror, setPhoneError] = useState("");
  const [emailerror, setEmailError] = useState("");
  const [passworderror, setPasswordError] = useState("");
  const [confirmpassworderror, setConfirmPasswordError] = useState("");

  function handleFName(event) {
    const firstname = event.target.value;
    setFName(firstname);

    var fname_regx = "^[A-Z](?=.{1,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$";
    if (firstname.match(fname_regx)) {
      setFNameError("");
    } else {
      setFNameError("Please enter your first name");
    }
  }

  function handleLName(event) {
    const lastname = event.target.value;
    setLName(lastname);

    var lname_regx = "^(?=.{1,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$";
    if (lastname.match(lname_regx)) {
      setLNameError("");
    } else if (lastname.length <1) {
      setLNameError("");
    }
      else{
      setLNameError("Please enter your valid last name");
    }
  }

  function handleDName(event) {
    const distributorname = event.target.value;
    setDName(distributorname);

    var dname_regx = "^[A-Z][a-zA-Z]{3,}(?: [A-Z][a-zA-Z]*){0,2}$";
    if (distributorname.match(dname_regx)) {
      setDNameError("");
    } else {
      setDNameError("Please enter valid Distributor name");
    }
  }

  function handlePhone(event) {
    const phone_no = event.target.value;
    setPhone(phone_no);

    if(phone_no.length >10 || phone_no.length < 10)
    {
      setPhoneError("Check your phone number again");
    }
    else {
      setPhoneError("");
    }
  }

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

  function handlePassword(event) {
    const pass = event.target.value;
    setPassword(pass);

    // regx for password validation
    var lowerCase = /[a-z]/g;
    var upperCase = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if (!pass.match(lowerCase)) {
      setPasswordError("Password should contain lowercase letters!");
    } else if (!pass.match(upperCase)) {
      setPasswordError("Password should contain uppercase letters!");
    } else if (!pass.match(numbers)) {
      setPasswordError("Password should contain numbers also!");
    } else if (pass.length < 6) {
      setPasswordError("Password should contain atleast 6 characters!");
    } else {
      setPasswordError("");
    }
  }

  const checkValidation = (e) =>{
    const reppassword = e.target.value;
    setConfirmPassword(reppassword);
    if(password != reppassword)
    {
      setConfirmPasswordError("Confirm Passwoord should match with Password");
    } else{
      setConfirmPasswordError("Password matched");
    }
  }

  return (
    <>
      <h1 className="mb-4 text-center h1-font">
        <i>Welcome to Fashion Mantra Jewellery</i>
      </h1>
      <div className="container mt-2">
        <h2 className="text-center subheading">Sign Up</h2>
        <p className="text-center">Please fill in the details</p>
        <hr />
        <div>
          <form className="novalidate">
            {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
            <div className="row mb-1">
              <div className="col">
                <div className="form-outline">
                  <label className="form-label" htmlFor="form3Example1">
                    First name<label style={{ color: "red" }}>*</label>
                  </label>
                  <input
                    type="text"
                    value={fname}
                    onChange={handleFName}
                    id="form3Example1"
                    className="form-control"
                    required
                  />
                </div>
                {fnameerror && <div style={{ color: "red" }}>{fnameerror}</div>}
              </div>

              <div className="col">
                <div className="form-outline">
                  <label className="form-label" htmlFor="form3Example2">
                    Last name <label htmlFor="">*</label>
                  </label>
                  <input
                    type="text"
                    value={lname}
                    onChange={handleLName}
                    id="form3Example2"
                    className="form-control"
                  />
                </div>
                {lnameerror && <div style={{ color: "red" }}>{lnameerror}</div>}
              </div>
            </div>

            {/* Distributor Name */}
            <div className="form-outline mb-2">
              <label className="form-label" htmlFor="form3Example3">
                Distributor Name<label style={{ color: "red" }}>*</label>
              </label>
              <input
                type="text"
                value={dname}
                onChange={handleDName}
                id="form3Example3"
                className="form-control"
                required
              />
            </div>
            {dnameerror && <div style={{ color: "red" }}>{dnameerror}</div>}
            {/* Phone Number */}
            <div className="form-outline mb-2">
              <label className="form-label" htmlFor="form3Example4">
                Phone Number<label style={{ color: "red" }}>*</label>
              </label>
              <input
                type="number"
                value={phone}
                onChange={handlePhone}
                id="form3Example4"
                className="form-control"
                required
              />
            </div>
            {phoneerror && <div style={{ color: "red" }}>{phoneerror}</div>}

            {/* <!-- Email input --> */}
            <div className="form-outline mb-2">
              <label className="form-label" htmlFor="form3Example5">
                Email<label style={{ color: "red" }}>*</label>
              </label>
              <input
                type="email"
                value={email}
                onChange={handleEmail}
                id="form3Example5"
                className="form-control"
                required
              />
            </div>
            {emailerror && <div style={{ color: "red" }}>{emailerror}</div>}

            {/* <!-- Password input --> */}
            <div className="form-outline mb-2">
              <label className="form-label" htmlFor="form3Example6">
                Password<label style={{ color: "red" }}>*</label>
              </label>
              <input
                type="password"
                value={password}
                onChange={handlePassword}
                id="form3Example6"
                className="form-control"
                required
              />
            </div>
            {passworderror && (
              <div style={{ color: "red" }}>{passworderror}</div>
            )}

            {/* <!--Confirm Password input --> */}
            <div className="form-outline mb-2  ">
              <label className="form-label" htmlFor="form3Example7">
                Confirm Password<label style={{ color: "red" }}>*</label>
              </label>
              <input
                type="password"
                onChange={(e) => {
                  checkValidation(e);
                }}
                id="form3Example7"
                className="form-control"
                required
              />
            </div>
            {confirmpassworderror && (
              <div style={{ color: "red" }}>{confirmpassworderror}</div>
            )}

            {/* <!-- Checkbox --> */}
            <div className="form-check d-flex justify-content-left mb-2">
              <label
                className="form-check-label mb-2 "
                htmlFor="form2Example33 "
              >
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
              <p className="mt-2 mb-2">or sign up with:</p>
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

              <p className="text-center mt-2">
                Already a member?{" "}
                <a href="#/" type="button">
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
