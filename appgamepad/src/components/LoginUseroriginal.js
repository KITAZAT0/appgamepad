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
    console.log(e.target.name);
    console.log(e.target.value);
    console.log(newLoginForm);
  }

 function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("http://localhost:3000/user/login", {
        user: { email: loginForm.userEmail, password: loginForm.userPassword },
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Im56RldrVmNTc28yMnJucXhULTJtUCJ9.eyJpc3MiOiJodHRwczovL2FwaWdhbWVwYWQuZXUuYXV0aDAuY29tLyIsInN1YiI6IkNPNUs2UmFQVVdUSHdsMkpuZ1BQWU9xV3hBUjZxSjhvQGNsaWVudHMiLCJhdWQiOiJodHRwczovL0dhbWVQYWQtQVBJIiwiaWF0IjoxNjA1MTc0NjgwLCJleHAiOjE2MDUyNjEwODAsImF6cCI6IkNPNUs2UmFQVVdUSHdsMkpuZ1BQWU9xV3hBUjZxSjhvIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.nosUiQGedlyEsYeOb3EJTJVgKrztj9aRBqhz6VjNiEEJw7BJKwQ8v2gPKAzyoyJrFXGdH9iAR2lMdos80qtBOA9dxvdHZR9oVWjbqfuiUQsPFSjwe60OLXKK5HLybCe1FCBYsYWdGmUDNxcy1LEjhhOM4-TyjeBok06XK9rT6EisSYteSMjmBtc-BCQoZrM0n63fxtqJ1X8PCHAE58AzByLIqVN7HZMqxMvmi5hCACVkjNig1q4tEJPbzipsZ8QdtQrmuy2r_bnNM95xBvSJxNvKvLZ85njGaa0op9MVkj1rRNEzdcUsKVaGl9wZj5yE8HRNpKs22w8xoiH7fGtuKw",
        },
        withCredentials: true,
      })
      .then(function (res) {
        console.log(res);
      })
      .catch(function (err) {
        console.log(err);
      });
      
  }

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
