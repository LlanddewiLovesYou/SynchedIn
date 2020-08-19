import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
    <Router>
      <LoginModal loading={state.loading} />
      <Masthead loginCallback={appLogin} />
      <Switch>
        {state.loggedIn && (
          <Route path="/message-contacts">
            <div className="app__box">
              <SubmissionForm />
            </div>
          </Route>
        )}
        <Route path="/">
          <Splash />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
