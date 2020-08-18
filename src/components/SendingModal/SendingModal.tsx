import React, { useMemo, useEffect } from "react";
import "./SendingModal.scss";
import image from "../../assets/message-sent.gif";
import linkedIn from "../../assets/linkedin-logo.webp";
import close from "../../assets/close-icon-dark.png";

export interface Props {
  recipientNames: string;
  open: boolean;
  loading: boolean;
  setState: any;
}

export const SendingModal: React.FC<Props> = ({
  open,
  recipientNames,
  loading,
  setState,
}) => {
  const showModal = open ? { display: "flex" } : { display: "none" };
  return (
    <div className="sending-modal" style={showModal}>
      <img
        src={close}
        alt=""
        className="close"
        onClick={() => setState({ open: false, loading: true })}
      />
      <img src={linkedIn} className="logo"></img>
      <div className="sending-modal__message">
        {loading
          ? "Sending your message to your contacts..."
          : `Message sent to ${recipientNames}`}
      </div>

      <img src={image} className="spinner"></img>
    </div>
  );
};
