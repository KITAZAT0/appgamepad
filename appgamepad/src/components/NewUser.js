/*import fichiers react node_modules */
import React from "react";
/*import CSS*/
/*import JS*/ 





function NewUser() {
  
function handleSubmit() {}

function newUser() {}

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
                    action=""
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
                        required
                        ref={newUser}
                      ></input>
                    </div>
                    <div className="form-group">
                      <label className="sr-only">Email</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="email: aquaponey@example.com"
                        name="userPassword"
                        id="userPassword"
                        required
                        ref={newUser}
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
                        required
                        ref={newUser}
                      ></input>
                    </div>
                    <div className="form-group">
                      <label className="sr-only">Confirm Password</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Confirm Password"
                        name="userEmail"
                        id="userEmail"
                        required
                        ref={newUser}
                      ></input>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg"
                    >Submit</button>
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