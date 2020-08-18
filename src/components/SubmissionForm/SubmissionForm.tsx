import React, { useState } from "react";
import "./SubmissionForm.scss";
import { Selector } from "../ContactSelector/ContactSelector";
import { contacts } from "../../response2.js";

export interface Props {
  //   children: any;
}

export const MessageForm: React.FC<Props> = ({ children }) => {
  const [formState, setFormState] = useState({ message: "", recipients: [] });
  return (
    <form onSubmit={() => console.log("submitted")} className="message-form">
      <div className="message-form__box">
        {children}
        <Selector contacts={contacts} setFormState={setFormState}></Selector>
      </div>
      <button>Send Messages</button>
    </form>
  );
};
