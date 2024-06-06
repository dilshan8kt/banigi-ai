import React, { useState } from "react";
import logo from "../assets/logo.png";
import mobileMenu from "../assets/mobileMenu.png";
import LoginModal from "../Components/LoginModal";
import SignupModal from "../Components/SignupModal";
import {
  NavLink,
  Outlet,
  useLocation,
  useSearchParams,
} from "react-router-dom";
import Scrollspy from "react-scrollspy";
import { useEffect } from "react";
import { getAuth, signOut } from "firebase/auth";
import checkAuth from "../auth/CheckAuth";

const Header = (props) => {
  const { authData } = checkAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
// console.log(authData.uid);
  const urlCheck = useLocation();
  const openLoginModal = () => {
    setShowSignupModal(false);
    setShowLoginModal(true);
  };
  const openSignupModal = () => {
    setShowLoginModal(false);
    setShowSignupModal(true);
  };
  const closeModal = () => {
    console.log("close");
    setShowLoginModal(false);
    setShowSignupModal(false);
  };

  return (
    <>
      <nav>
        <div className="navbar">
          <div className="nav_logo">
            <img src={logo} alt="Banigi Ai" />
          </div>

          <div className="nav_links">
            <ul>
              <Scrollspy
                items={[
                  "main_banner",
                  "howItWork",
                  "feedback",
                  "pricing",
                  "faq",
                  "contact_us",
                ]}
                currentClassName="active_navLink"
              >
                <a
                  href="#main_banner"
                  className={
                    urlCheck.hash === "" || urlCheck.hash === "#main_banner"
                      ? "active_navLink"
                      : ""
                  }
                >
                  <li>Home</li>
                </a>

                <a
                  href="#howItWork"
                  className={
                    urlCheck.hash === "#howItWork" ? "active_navLink" : ""
                  }
                >
                  <li>How It Work</li>
                </a>
                <a
                  href="#feedback"
                  className={
                    urlCheck.hash === "#feedback" ? "active_navLink" : ""
                  }
                >
                  <li>Feedback</li>
                </a>
                <a
                  href="#pricing"
                  className={
                    urlCheck.hash === "#pricing" ? "active_navLink" : ""
                  }
                >
                  <li>Pricing</li>
                </a>
                <a
                  href="#faq"
                  className={urlCheck.hash === "#faq" ? "active_navLink" : ""}
                >
                  <li>Faq</li>
                </a>
                <a
                  href="#contact_us"
                  className={
                    urlCheck.hash === "#contact_us" ? "active_navLink" : ""
                  }
                >
                  <li>Contact Us</li>
                </a>
              </Scrollspy>
            </ul>
          </div>

          <div className="nav_button">
            {Object.values(authData).length > 0 ? (
              authData.displayName
            ) : (
              // console.log("----",Object.values(auth).length),
              <button className="login_btn" onClick={openLoginModal}>
                Login
              </button>
            )}
            {showLoginModal && (
              <LoginModal
                closeModal={closeModal}
                openSignupModal={openSignupModal}
                manageLoader={props.manageLoader}
              />
            )}
            <button className="getStarted_btn" onClick={openSignupModal}>
              Get Started
            </button>
            {showSignupModal && (
              <SignupModal
                closeModal={closeModal}
                openLoginModal={openLoginModal}
                manageLoader={props.manageLoader}
              />
            )}
            <img
              src={mobileMenu}
              alt=""
              className="mobilemenu"
              onClick={() => {
                setShowMobileNav(!showMobileNav);
              }}
            />
          </div>
        </div>

        {showMobileNav && (
          <div className="mobile_navbar">
            <ul>
              <a
                href="#main_banner"
                className={
                  urlCheck.hash === "#main_banner " && "active_navLink"
                }
              >
                <li>Home</li>
              </a>

              <a
                href="#howItWork"
                className={urlCheck.hash === "#howItWork" && "active_navLink"}
              >
                <li>How It Work</li>
              </a>
              <a
                href="#feedback"
                className={urlCheck.hash === "#feedback" && "active_navLink"}
              >
                <li>Feedback</li>
              </a>
              <a
                href="#pricing"
                className={urlCheck.hash === "#pricing" && "active_navLink"}
              >
                <li>Pricing</li>
              </a>
              <a
                href="#faq"
                className={urlCheck.hash === "#faq" && "active_navLink"}
              >
                <li>Faq</li>
              </a>
              <a
                href="#contact_us"
                className={urlCheck.hash === "#contact_us" && "active_navLink"}
              >
                <li>Contact Us</li>
              </a>
            </ul>
            <button className="login_btn" onClick={openLoginModal}>
              Login
            </button>
            {showLoginModal && (
              <LoginModal
                closeModal={closeModal}
                openSignupModal={openSignupModal}
                manageLoader={props.manageLoader}
              />
            )}
            <button className="getStarted_btn" onClick={openSignupModal}>
              Get Started
            </button>
            {showSignupModal && (
              <SignupModal
                closeModal={closeModal}
                openLoginModal={openLoginModal}
                manageLoader={props.manageLoader}
              />
            )}
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
