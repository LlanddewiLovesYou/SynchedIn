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

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const appLogin = () => setLoggedIn(true);
  return (
    <div>
      <Masthead loginCallback={appLogin} />
      {loggedIn ? (
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
