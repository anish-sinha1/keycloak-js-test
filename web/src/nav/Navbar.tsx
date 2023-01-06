import React from "react";

import http from "../http/client";
import * as auth from "../auth/keycloak";
import styles from "./scss/Navbar.module.scss";

const Navbar: React.FC = () => {
  return (
    <nav className={styles["nav"]}>
      {!auth.authenticated() ? (
        <div className={styles["guest"]}>
          <img
            className={styles["guest-img"]}
            src="https://storage.googleapis.com/sonar-assets/logos/logo.svg"
            alt="Sonar Logo"
          />
        </div>
      ) : (
        <div className="client"></div>
      )}
    </nav>
  );
};

export default Navbar;
