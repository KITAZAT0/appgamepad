/*import fichiers react node_modules */
import React, { useState } from "react";
/*import CSS*/
/*import JS*/ 
import axios from "axios";


function NewUser() {
    const [userForm, setNewUserForm] = useState({
      userName: "",
      userEmail: "",
      userPassword: "",
      userRoles: "[]",
    });

function changeNewUserForm(e) {
    let newUserForm = Object.assign({}, userForm);
    newUserForm[(e.target.name)] = e.target.value;
    setNewUserForm(newUserForm);
    console.log(e.target.name);
    console.log(e.target.value);
    console.log(newUserForm);
} 
function handleSubmit(e) {
  e.preventDefault();

  axios
    .post("http://localhost:3000/user/create", {
      user: {
        name: userForm.userName,
        email: userForm.userEmail,
        password: userForm.userPassword,
      },
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
                <h1 className="display-4 py-2 text-truncate">register</h1>
                <div className="px-2">
                  <form
                    className="justify-content-center"
                    onSubmit={(e) => handleSubmit(e)}
                  >
                    <div className="form-group">
                      <label className="sr-only">username</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="username: Limascargot"
                        name="userName"
                        id="userName"
                        value={userForm.userName}
                        required
                        onChange={changeNewUserForm}
                      ></input>
                    </div>
                    <div className="form-group">
                      <label className="sr-only">Email</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="email: aquaponey@example.com"
                        name="userEmail"
                        id="userEmail"
                        value={userForm.userEmail}
                        required
                        onChange={changeNewUserForm}
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
                        value={userForm.userPassword}
                        required
                        onChange={changeNewUserForm}
                      ></input>
                    </div>
                    {/* <div className="form-group">
                      <label className="sr-only">Confirm Password</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Confirm Password"
                        name="userConfirmPassword"
                        id="userConfirmPassword""
                        value={userForm.userConfirmPassword"}
                        required
                        onChange={changeNewUserForm}
                      ></input>
                    </div> */}
                    <button
                      
                      type="submit"
                      className="btn btn-primary btn-lg"
                    >
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

export default NewUser;