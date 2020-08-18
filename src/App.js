import React, { useState } from "react";
import "./App.css";

import { Masthead } from "./components/Masthead/Masthead";
import { Splash } from "./components/Splash/Splash";
import { SubmissionForm } from "./components/SubmissionForm/SubmissionForm";
import { LoginModal } from "./components/LoginModal/LoginModal";
import { SendingModal } from "./components/SendingModal/SendingModal";

function App() {
  const [state, setState] = useState({ loggedIn: false, loading: false });

  const appLogin = () => {
    setState({ ...state, loading: true });
    setTimeout(() => {
      setState({ ...state, loggedIn: true });
    }, 3000);
    setTimeout(() => {
      setState({ loggedIn: true, loading: false });
    }, 3500);
  };
  return (
    <div>
      <LoginModal loading={state.loading} />
      <Masthead loginCallback={appLogin} />
      {state.loggedIn ? (
        <div className="app__box">
          <SubmissionForm />
        </div>
      ) : (
        <Splash />
      )}
    </div>
  );
}

export default App;
