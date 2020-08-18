import React from "react";
import "./LoginModal.scss";
import image from "../../assets/loading-spinner.gif";
import linkedIn from "../../assets/linkedin-logo.webp";

export interface Props {
  loading: boolean;
}

export const LoginModal: React.FC<Props> = ({ loading }) => {
  const showModal = loading ? { display: "flex" } : { display: "none" };
  return (
    <div className="login-modal" style={showModal}>
      <img src={linkedIn} className="logo"></img>
      Logging with your LinkedIn account...
      <img src={image} className="spinner"></img>
    </div>
  );
};
