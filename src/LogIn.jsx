import "./App.css";

function LogIn() {
  return (
    <>
     <h1 className="mb-4 mt-4 text-center h1-font">
          <i>Welcome to Fashion Mantra Jewellery</i>
        </h1>
<div className="container login mt-2">
       
        <h2 className="text-center mb-3 subheading">LogIn</h2>
<hr />
          <div>

      <form>
        <div className="form-outline mb-2">
          <label className="form-label" htmlFor="form3Example15">
            Email address
          </label>
          <input
            type="email"
            id="form3Example9"
            className="form-control"
            required
          />
        </div>
        {/* <!-- Password input --> */}
        <div className="form-outline mb-2">
          <label className="form-label" htmlFor="form3Example16">
            Password
          </label>
          <input
            type="password"
            id="form3Example10"
            className="form-control"
            required
          />
        </div>

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
        <div className="text-center">
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
                </div>
                <p className="text-center mt-3">
                  New member?{" "}
                  <a href="#" type="button">
                    Create new account
                  </a>
                </p>
      </form>
      </div>
      </div>
    </>
  );
}
export default LogIn;
