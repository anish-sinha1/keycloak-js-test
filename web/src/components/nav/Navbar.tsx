import React from "react";

import * as auth from "../../auth/keycloak";

const Navbar: React.FC = () => {
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
        <div className="navclient">
          <div className="nav-client-action">
            <img
              className="nav-client-img"
              src="https://storage.googleapis.com/sonar-assets/logos/logo.svg"
              alt="Sonar Logo"
            />
            <div className="nav-client-about">About</div>
            <div className="nav-client-faq">FAQ</div>
            <div className="nav-client-contact">Contact</div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
