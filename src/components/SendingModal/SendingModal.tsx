import React from "react";
import "./SendingModal.scss";
import gif from "../../assets/message-sent.gif";
import image from "../../assets/done.png";
import linkedIn from "../../assets/linkedin-logo.webp";
import close from "../../assets/close-icon-dark.png";
import error from "../../assets/error.png";

export interface Props {
  recipientNames: string;
  open: boolean;
  loading: boolean;
  setState;
}

export const SendingModal: React.FC<Props> = ({
  open,
  recipientNames,
  loading,
  setState,
}) => {
  const src = loading ? gif : image;
  return open ? (
    <div className="sending-modal">
      <img
        src={close}
        alt=""
        className="close"
        onClick={() => setState({ open: false, loading: true })}
      />
      <img src={linkedIn} className="logo" alt=""></img>
      <div className="sending-modal__message">
        {loading
          ? "Sending your message to your contacts..."
          : recipientNames !== ""
          ? `Message sent to ${recipientNames}`
          : "You didn't select any recipients"}
      </div>
      {recipientNames.length > 0 ? (
        <img src={src} className="spinner" alt=""></img>
      ) : (
        <img src={error} className="spinner" alt=""></img>
      )}
    </div>
  ) : null;
};
