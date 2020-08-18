import React from "react";
import "./LoginModal.scss";
import image from "../../assets/loading-spinner.gif";
import linkedIn from "../../assets/linkedin-logo.webp";

export interface Props {
  loading: boolean;
}

export const LoginModal: React.FC<Props> = ({ loading }) => {
  // const showModal = loading ? { display: "flex" } : { display: "none" };
  return loading ? (
    <div className="login-modal">
      <img src={linkedIn} className="logo" alt=""></img>
      Logging with your LinkedIn account...
      <img src={image} className="spinner" alt=""></img>
    </div>
  ) : null;
};
