import React from "react";
import "./login.css";
import { useState } from "react";
import image from "./images/logo.jpg";
import { Link } from "react-router-dom";

const Login = () => {
  const [enteredName, setName] = useState("");
  const [enteredEmail, setEmail] = useState("");
  const [valid1, validName] = useState(false);
  const [valid2, validEmail] = useState(false);
  const [teacher, setTeacher] = useState(true);
  const [student, setStudent] = useState(false);
  const loginTeacherHandler = () => {
    setTeacher(true);
    setStudent(false)
  };
  const loginStudentHandler = () => {
    setStudent(true);
    setTeacher(false)
  };
  const namechangeHandler = (event) => {
    return setName(event.target.value), validName(true);
  };
  const emailchangeHandler = (event) => {
    return setEmail(event.target.value), validEmail(true);
  };
  const submitHandler = () => {
    setName("");
    setEmail("");
  };

  return (
    <div className="contents" style={{backgroundImage:`url(${image})`}}>
    <div className="login">
        <div className="main">
          <div className="Teacher">
              <button className="btn-2" onClick={loginTeacherHandler}>Teacher</button>
          </div>
          <div className="Student">
              <button className="btn-1" onClick={loginStudentHandler}>Student</button>
          </div>
        </div>
        {student && <div className="col-1">
          
            <div>
              <h1>Login</h1>
            </div>
            <div className="form">
              <form onSubmit={submitHandler}>
                <div className="form-1">
                  <input
                    type="text"
                    value={enteredName}
                    placeholder="Student Name"
                    className="inp"
                    onChange={namechangeHandler}
                  />
                </div>
                {!valid1 && (
                  <div className="form-1-1">
                    <h4>Enter name</h4>
                  </div>
                )}
                <div className="form-2">
                  <input
                    type="email"
                    value={enteredEmail}
                    placeholder="E-mail"
                    className="inp"
                    onChange={emailchangeHandler}
                  />
                </div>
                {!valid2 && (
                  <div className="form-1-1">
                    <h4>Enter E-mail</h4>
                  </div>
                )}
                <div className="form-4">
                  <Link to="/" className="btn1">
                    Login
                  </Link>
                </div>
              </form>
            </div>
          </div>}
          {teacher && <div className="col-1">
          
            <div>
              <h1>Login</h1>
            </div>
            <div className="form">
              <form onSubmit={submitHandler}>
                <div className="form-1">
                  <input
                    type="text"
                    value={enteredName}
                    placeholder="Name"
                    className="inp"
                    onChange={namechangeHandler}
                  />
                </div>
                {!valid1 && (
                  <div className="form-1-1">
                    <h4>Enter name</h4>
                  </div>
                )}
                <div className="form-2">
                  <input
                    type="email"
                    value={enteredEmail}
                    placeholder="E-mail"
                    className="inp"
                    onChange={emailchangeHandler}
                  />
                </div>
                {!valid2 && (
                  <div className="form-1-1">
                    <h4>Enter E-mail</h4>
                  </div>
                )}
                <div className="form-4">
                  <Link to="/" className="btn1">
                    Login
                  </Link>
                </div>
              </form>
            </div>
          </div>}
        </div>
      </div>
  );
};
export default Login;
