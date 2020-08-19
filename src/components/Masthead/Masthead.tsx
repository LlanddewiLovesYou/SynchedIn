import React, { useState } from "react";
import "./Masthead.scss";
import userIcon from "../../assets/user-icon.png";
import { useHistory } from "react-router-dom";

export interface Props {
  loginCallback: () => {};
}

export const Masthead: React.FC<Props> = ({ loginCallback }) => {
  const [state, setState] = useState({ loggedin: false });
  const history = useHistory();

  const login = (): void => {
    setState({ loggedin: true });
    loginCallback();
    history.push("/message-contacts");
  };
  return (
    <div className="masthead">
      <span className="masthead__option logo">SynchedIn</span>
      <div className="right">
        {!state.loggedin ? (
          <button
            className="masthead__login-button masthead__login"
            onClick={login}
          >
            Login with LinkedIn
          </button>
        ) : (
          <div className="masthead__login">
            <span className="masthead__option">
              Welcome, Christopher
              <span>
                <img src={userIcon} alt=""></img>
              </span>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
