import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";

import { Masthead } from "./components/Masthead/Masthead";
import { Splash } from "./components/Splash/Splash";
import { MessageForm } from "./components/MessageForm/MessageForm";
import { LoginModal } from "./components/LoginModal/LoginModal";

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
          <MessageForm>
            <textarea></textarea>
          </MessageForm>
        </div>
      ) : (
        <Splash />
      )}
    </div>
  );
}

export default App;
