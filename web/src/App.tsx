import "./App.css";

import * as auth from "./auth/keycloak";
import Navbar from "./components/nav/Navbar";
import Onboarding from "./components/onboard/Onboarding";

const App = () => {
  return (
    <section className="app">
      <Navbar />
      {auth.authenticated() ? (
        <div>
          Logged in! Token: {auth.getAccessTokenSilently()}
          <button onClick={() => auth.logout()}>Logout</button>
        </div>
      ) : (
        <Onboarding />
      )}
    </section>
  );
};

export default App;
