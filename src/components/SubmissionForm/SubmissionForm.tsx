import React, { useReducer } from "react";
import "./SubmissionForm.scss";
import { ContactSelector } from "../ContactSelector/ContactSelector";
import { contacts } from "../../response2.js";
import { formReducer } from "../../reducers/formReducer";
import { MessageTextArea } from "../MessageTextArea/MessageTextArea";

export interface Props {}

export const SubmissionForm: React.FC<Props> = ({ children }) => {
  const handleSubmit = () => {
    console.log("submitted state", state);
  };
  const [state, dispatch] = useReducer(formReducer, {
    message: "",
    recipients: [],
  });
  return (
    <form onSubmit={() => handleSubmit()} className="message-form">
      <div className="message-form__box">
        <MessageTextArea dispatch={dispatch} />
        <ContactSelector
          contacts={contacts}
          dispatch={dispatch}
        ></ContactSelector>
      </div>
      <button>Send Messages</button>
    </form>
  );
};
