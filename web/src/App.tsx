import "./App.css";

import * as auth from "./auth/keycloak";

const App = () => {
  return (
    <section className="app">
      {auth.authenticated() ? (
        <div>
          Logged in! Token: {auth.getAccessTokenSilently()}
          <button onClick={() => auth.logout()}>Logout</button>
        </div>
      ) : (
        <button onClick={() => auth.login()}>Login</button>
      )}
    </section>
  );
};

export default App;
