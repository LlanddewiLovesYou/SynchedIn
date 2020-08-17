import React, { useState } from "react";
import "./Selector.scss";
import { Company } from "../../interfaces/company.interface";
import userIcon from "../../assets/user-icon.png";

export interface Props {
  companies: Company[];
}

export const Selector: React.FC<Props> = ({ companies }) => {
  const [selectedCompany, setSelectedCompany] = useState({
    company: companies[0],
  });
  console.log(selectedCompany.company.contacts);
  return (
    <div className="selector">
      Message Your Contacts at:
      <div className="companies">
        {companies.map((company, i) =>
          company === selectedCompany.company ? (
            <div
              className="selector__company selected"
              onClick={() => setSelectedCompany({ company: companies[i] })}
            >
              {company.name}
            </div>
          ) : (
            <div
              className="selector__company"
              onClick={() => setSelectedCompany({ company: companies[i] })}
            >
              {company.name}
            </div>
          )
        )}
      </div>
      <div className="selector__contacts">
        {selectedCompany.company.contacts.map((contact) => (
          <label>
            <input type="checkbox" value={contact.email}></input>
            <img src={userIcon}></img>
            {contact.displayName}
          </label>
        ))}
      </div>
    </div>
  );
};
