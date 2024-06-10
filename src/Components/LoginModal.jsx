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
import SignupModal from "../Components/SignupModal";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  OAuthProvider,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  signOut,
} from "firebase/auth";
import { errorMsg } from "../common/alert";

const LoginModal = ({ closeModal, openSignupModal, manageLoader }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeClose);
  const navigate = useNavigate();

  const handleToggle = () => {
    if (type === "password") {
      setIcon(eyeOpen);
      setType("text");
    } else {
      setIcon(eyeClose);
      setType("password");
    }
  };

  const loginWithFb = () => {
    const auth = getAuth();
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        closeModal();
        navigate("/dashboard/interiorDesign");
      })
      .catch((error) => {});
  };

  const loginWithGoogle = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        closeModal();
        navigate("/dashboard/interiorDesign");
      })
      .catch((error) => {});
  };

  const loginWithApple = () => {
    const auth = getAuth();
    const provider = new OAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        closeModal();
        navigate("/dashboard/interiorDesign");
      })
      .catch((error) => {});
  };

  const loginUser = (e) => {
    e.preventDefault();
    manageLoader(true);

    if (!email || !password) {
      errorMsg("Check User credentials..");
      manageLoader(false);
      return 0;
    }
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        closeModal();
        manageLoader(false);
        navigate("/dashboard/interiorDesign");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        errorMsg("Invalid Login credentials")
        manageLoader(false);
      });
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
                  Save time and boost your productivity using powerful{" "}
                  <span>Banigi AI</span> features
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
                        type={type}
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="current-password"
                      />
                      <img
                        src={icon}
                        alt=""
                        onClick={handleToggle}
                        className="eyeIcon"
                      />
                    </div>

                    <span>Forgot Password?</span>

                    <Link to="/dashboard/interiorDesign">
                      <PrimaryButton
                        text="Login"
                        onClick={(e) => loginUser(e)}
                      />{" "}
                    </Link>
                  </form>
                </div>
                <span className="loginTextCenter">Or Login with</span>

                <div className="socialLogin">
                  <img src={fbLogin} alt="" onClick={() => loginWithFb()} />
                  <img
                    src={googleLogin}
                    alt=""
                    onClick={() => loginWithGoogle()}
                  />
                  <img
                    src={appleLogin}
                    alt=""
                    onClick={() => loginWithApple()}
                  />
                </div>

                <p className="dha_line">
                  <span className="loginTextCenter2">
                    Don’t have an account?{" "}
                  </span>
                  <span onClick={openSignupModal}> Signup</span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
