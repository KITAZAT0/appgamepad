/*import fichiers react node_modules */
import React, { useState } from "react";
/*import CSS*/
/*import JS*/
/* import ContextBL from "./ContextBL"; */ 


function LoginUser() {
    const [loginForm, setLoginForm] = useState({userEmail:"", userPassword:""});

function changeLoginForm(e) {
    let newLoginForm = Object.assign({}, loginForm);
    newLoginForm[e.target.name] = e.target.value;
    setLoginForm(newLoginForm);
    console.log(newLoginForm);
} 


function handleSubmit(e) {e.preventDefault()}


  return (
    <>
      <section id="cover" className="min-vh-100">
        <div id="cover-caption">
          <div className="container">
            <div className="row text-white">
              <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
                <h1 className="display-4 py-2 text-truncate">Login</h1>
                <div className="px-2">
                  <form
                    className="justify-content-center"
                    onSubmit={(e) => handleSubmit(e)}
                  >
                    <div className="form-group">
                      <label className="sr-only">Email</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="email: aquaponey@example.com"
                        name="userEmail"
                        id="userEmail"
                        value={loginForm.userEmail}
                        required
                        onChange={changeLoginForm}
                      ></input>
                    </div>
                    <div className="form-group">
                      <label className="sr-only">Password</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Password"
                        name="userPassword"
                        id="userPassword"
                        value={loginForm.userPassword}
                        required
                        onChange={changeLoginForm}
                      ></input>
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LoginUser;
