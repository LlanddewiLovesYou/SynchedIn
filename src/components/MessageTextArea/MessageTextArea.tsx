import React from "react";
import "./MessageTextArea.scss";

export interface Props {}

export const MessageTextArea: React.FC<Props> = () => {
  return (
    <div className="message-text">
      Type your message here...
      <textarea></textarea>
    </div>
  );
};
