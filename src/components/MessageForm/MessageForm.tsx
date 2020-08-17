import React from "react";
import "./MessageForm.scss";
import { Selector } from "../Selector/Selector";
import { companies } from "../../response.js";

export interface Props {
  //   children: any;
}

export const MessageForm: React.FC<Props> = ({ children }) => {
  return (
    <form onSubmit={() => console.log("submitted")} className="message-form">
      <div className="message-form__box">
        {children}
        <Selector companies={companies}></Selector>
      </div>
      <button>Send Messages</button>
    </form>
  );
};
