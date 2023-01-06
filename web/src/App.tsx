import "./App.css";

import * as auth from "./auth/keycloak";
import Navbar from "./nav/Navbar";

const App = () => {
  return (
    <section className="app">
      <Navbar />
      {/* {auth.authenticated() ? (
        <div>
          Logged in! Token: {auth.getAccessTokenSilently()}
          <button onClick={() => auth.logout()}>Logout</button>
        </div>
      ) : (
        <>
          <button onClick={() => auth.login()}>Login</button>
          <button onClick={() => auth.register()}>Register</button>
        </>
      )} */}
    </section>
  );
};

export default App;
