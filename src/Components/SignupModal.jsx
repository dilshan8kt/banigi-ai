import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import loginImg from "../assets/loginImg.png";
import loginLogo from "../assets/logo.png";
import PrimaryButton from "./PrimaryButton";
import fbLogin from "../assets/fbLogin.png";
import googleLogin from "../assets/googleLogin.png";
import appleLogin from "../assets/appleLogin.png";
import modalClose from "../assets/modalClose.png";
import eyeOpen from "../assets/eyeOpen.png";
import eyeClose from "../assets/eyeClose.png";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const SignupModal = ({ closeModal, openLoginModal, manageLoader }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Confirmpassword, setConfirmPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");
  const [passwordIcon, setPasswordIcon] = useState(eyeClose);
  const [confirmPasswordIcon, setConfirmPasswordIcon] = useState(eyeClose);

  const handleTogglePassword = () => {
    if (passwordType === "password") {
      setPasswordIcon(eyeOpen);
      setPasswordType("text");
    } else {
      setPasswordIcon(eyeClose);
      setPasswordType("password");
    }
  };

  const handleToggleConfirmPassword = () => {
    if (confirmPasswordType === "password") {
      setConfirmPasswordIcon(eyeOpen);
      setConfirmPasswordType("text");
    } else {
      setConfirmPasswordIcon(eyeClose);
      setConfirmPasswordType("password");
    }
  };

  const createUser = (e) => {
    e.preventDefault();
    manageLoader(true);
    if (password == Confirmpassword) {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          closeModal();
          manageLoader(false);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          manageLoader(false);
        });
    } else {
      console.log("password not match");
    }
  };

  return (
    <>
      <div className="ModalContainer">
        <div className="loginModalOverlay">
          <div className="LoginModalContainer">
            <div className="closeIcon">
              <img src={modalClose} onClick={closeModal} alt="" />
            </div>

            <div className="loginModalDiv">
              <div className="LoginLeftDiv">
                <img src={loginImg} alt="" />
              </div>
              <div className="LoginRightDiv">
                <div className="loginLogo">
                  <img src={loginLogo} alt="" />
                </div>
                <p className="login_text">
                  Register to save time and boost your productivity using
                  powerful <span>Banigi AI</span>
                </p>

                <div className="LoginForm">
                  <form action="">
                    <input
                      type="text"
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className="passwordField">
                      <input
                        type={passwordType}
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="current-password"
                      />
                      <img
                        src={passwordIcon}
                        alt=""
                        onClick={handleTogglePassword}
                        className="eyeIcon"
                      />
                    </div>
                    <div className="passwordField">
                      <input
                        type={confirmPasswordType}
                        value={Confirmpassword}
                        placeholder="Confirm Password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        autoComplete="current-password"
                      />
                      <img
                        src={confirmPasswordIcon}
                        alt=""
                        onClick={handleToggleConfirmPassword}
                        className="eyeIcon"
                      />
                    </div>

                    <PrimaryButton
                      onClick={(e) => createUser(e)}
                      text="Sign Up"
                    />
                  </form>
                </div>
                <span className="loginTextCenter">Or Signup with</span>

                <div className="socialLogin">
                  <img src={fbLogin} alt="" />
                  <img src={googleLogin} alt="" />
                  <img src={appleLogin} alt="" />
                </div>

                <p className="dha_line">
                  <span className="loginTextCenter2">
                    Already have an account?{" "}
                  </span>
                  <span onClick={openLoginModal}>Login</span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupModal;
