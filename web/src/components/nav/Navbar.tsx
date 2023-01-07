import React, { useState } from "react";
import { Link } from "react-router-dom";

import * as auth from "../../auth/keycloak";

const Navbar: React.FC = () => {
  const [showProfileOptions, setShowProfileOptions] = useState<boolean>(false);
  return (
    <nav className="nav">
      {!auth.authenticated() ? (
        <div className="nav-guest">
          <img
            className="nav-guest-img"
            src="https://storage.googleapis.com/sonar-assets/logos/logo-multi-color.svg"
            alt="Sonar Logo"
          />
        </div>
      ) : (
        <div className="nav-client">
          <div className="nav-client-action">
            <img
              className="nav-client-img"
              src="https://storage.googleapis.com/sonar-assets/logos/logo.svg"
              alt="Sonar Logo"
            />
            <div className="nav-client-about">About</div>
            <div className="nav-client-faq">FAQ</div>
            <div className="nav-client-contact">Contact</div>
            <div className="nav-client-avatar">
              <img
                className="nav-client-avatar"
                src="https://storage.googleapis.com/sonar-assets/general/avatars/dolphin.svg"
                alt="avatar"
                onMouseEnter={() => setShowProfileOptions(() => true)}
              />
              {showProfileOptions && (
                <div
                  className="nav-profile-dropdown"
                  onMouseLeave={() => setShowProfileOptions(() => false)}
                >
                  <Link to="/profile" className="link link-bare">
                    Settings
                  </Link>
                  <div className="nav-profile-dropdown__logout">
                    <button
                      className="button button-logout button-bare"
                      onClick={() => auth.logout()}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
