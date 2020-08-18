import React, { useState, Dispatch } from "react";
import "./ContactSelector.scss";
import { Contact } from "../../interfaces/contact.interface";
import userIcon from "../../assets/user-icon.png";
import closeIcon from "../../assets/close-icon.png";
import { Action } from "../../interfaces/Action.interface";

export interface Props {
  contacts: Contact[];
  dispatch: Dispatch<Action>;
}

export const ContactSelector: React.FC<Props> = ({ contacts, dispatch }) => {
  const [selectedCompany, setSelectedCompany] = useState<string | undefined>(
    undefined
  );

  const filteredContacts = selectedCompany
    ? contacts.filter((contact) => contact.company === selectedCompany)
    : contacts;
  return (
    <div className="selector">
      <div>
        Message your contacts{" "}
        {selectedCompany ? (
          <span>
            at{" "}
            <span className="selector__company">
              {selectedCompany}
              <img
                src={closeIcon}
                onClick={() => setSelectedCompany(undefined)}
                alt=""
              ></img>
            </span>
          </span>
        ) : null}
      </div>
      <div className="selector__contacts">
        {filteredContacts.map((contact) => (
          <label key={contact.linkedinId}>
            <input
              type="checkbox"
              value={contact.linkedinId}
              onClick={(e) => {
                if (!(e.target as HTMLInputElement).checked) {
                  dispatch({
                    type: "REMOVE_ID_FROM_RECIPIENTS",
                    payload: contact.linkedinId,
                  });
                  return;
                }
                dispatch({
                  type: "ADD_ID_TO_RECIPIENTS",
                  payload: contact.linkedinId,
                });
              }}
            ></input>
            <img src={userIcon} alt=""></img>
            <strong>{contact.displayName + " - "}</strong>
            <button
              type="button"
              onClick={() => setSelectedCompany(contact.company)}
              className="button"
            >
              {contact.company}
            </button>
          </label>
        ))}
      </div>
    </div>
  );
};
