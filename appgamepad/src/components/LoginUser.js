/*import fichiers react node_modules */
import React, { useState } from "react";
import axios from "axios";

function LoginUser() {
  const [loginForm, setLoginForm] = useState({
    userEmail: "",
    userPassword: "",
  });

  function changeLoginForm(e) {
    let newLoginForm = Object.assign({}, loginForm);
    newLoginForm[e.target.name] = e.target.value;
    setLoginForm(newLoginForm);
    /* console.log(e.target.name);
    console.log(e.target.value);
    console.log(newLoginForm); */
  }

  async function handleSubmit(e) {
    e.preventDefault();

    logUser({ email: loginForm.userEmail, password: loginForm.userPassword })
  }


  const logUser = async (data) => {
    const res = await axios.post(`http://localhost:3000/user/login`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Im56RldrVmNTc28yMnJucXhULTJtUCJ9.eyJpc3MiOiJodHRwczovL2FwaWdhbWVwYWQuZXUuYXV0aDAuY29tLyIsInN1YiI6IkNPNUs2UmFQVVdUSHdsMkpuZ1BQWU9xV3hBUjZxSjhvQGNsaWVudHMiLCJhdWQiOiJodHRwczovL0dhbWVQYWQtQVBJIiwiaWF0IjoxNjA2NzU3MTAyLCJleHAiOjE2MDY4NDM1MDIsImF6cCI6IkNPNUs2UmFQVVdUSHdsMkpuZ1BQWU9xV3hBUjZxSjhvIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.iQlfyxOtBX4r1jDUpyc4uRJZSPkgUsV9q1an2XvD0u7B3O4C3tK19p4Dne1eif3-IAbWvzdTmFBuaIl-_h7g-iYzllJ7kDoqqvGvC7hojZGs_LGSnkIPnqGLx84lgUE_5OZKnPYT7OxgOvXl2y4rQCDXKOYsy3R0NaClXTdSFcNA42HkuLhO6nDa7dhZ44SKcBQ1RwH59gTZbFgHCNTe3NQUzhd3qSI5GbKntiW9E-1kr6gQi9Y9JFTwUtDP_fEAXqBNLLghMgGFEsDoTUzXd89fq4tAVfOHbvkcCgRIZyMWxZHKwKa43Ou4YpPh3onZwhkw3hgg3yLCPrcFxhVdUA",
      },
      withCredentials: true,
    });
    console.log("res");
    console.log(res);
  };

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
