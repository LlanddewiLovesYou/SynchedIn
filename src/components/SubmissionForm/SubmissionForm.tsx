import React, { useReducer, useState } from "react";
import "./SubmissionForm.scss";
import { ContactSelector } from "../ContactSelector/ContactSelector";
import { contacts } from "../../response2.js";
import { Contact } from "../../interfaces/Contact.interface";
import { formReducer } from "../../reducers/formReducer";
import { MessageTextArea } from "../MessageTextArea/MessageTextArea";
import { SendingModal } from "../SendingModal/SendingModal";

export interface Props {}

export const SubmissionForm: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(formReducer, {
    contacts,
    message: "",
    recipients: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setModalState({ ...modalState, open: true });
    if (state.recipients.length > 0) {
      dispatch({ type: "UPDATE_MESSAGE", payload: "" });
    }
    setTimeout(() => {
      setModalState({ open: true, loading: false });
    }, 3000);
  };

  const [modalState, setModalState] = useState({
    loading: true,
    open: false,
  });

  const recipientNames = getDisplayNames(
    state.contacts
      .filter((contact: Contact) => {
        return state.recipients.includes(contact.linkedinId);
      })
      .map((contact: Contact) => contact.displayName)
  );

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="message-form">
      <SendingModal
        recipientNames={recipientNames}
        open={modalState.open}
        loading={modalState.loading}
        setState={setModalState}
      ></SendingModal>
      <div className="message-form__box">
        <MessageTextArea dispatch={dispatch} value={state.message} />
        <ContactSelector
          contacts={contacts}
          selected={state.recipients}
          dispatch={dispatch}
        ></ContactSelector>
      </div>
      <button type="submit">Send Messages</button>
    </form>
  );
};

const getDisplayNames = (recipientArray: string[]) => {
  let namesString = "";
  recipientArray.map((name: string, i) => {
    if (i !== recipientArray.length - 1) {
      namesString = namesString + name + ", ";
    } else {
      namesString = namesString + "and " + name + ". ";
    }
  });
  return namesString;
};
