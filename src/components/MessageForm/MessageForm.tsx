import React from "react";
import "./MessageForm.scss";
import { Selector } from "../ContactSelector/ContactSelector";
import { contacts } from "../../response2.js";

export interface Props {
  //   children: any;
}

export const MessageForm: React.FC<Props> = ({ children }) => {
  return (
    <form onSubmit={() => console.log("submitted")} className="message-form">
      <div className="message-form__box">
        {children}
        <Selector contacts={contacts}></Selector>
      </div>
      <button>Send Messages</button>
    </form>
  );
};
