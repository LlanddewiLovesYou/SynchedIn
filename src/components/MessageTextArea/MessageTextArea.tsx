import React, { Dispatch } from "react";
import "./MessageTextArea.scss";
import { Action } from "../../interfaces/Action.interface";

export interface Props {
  dispatch: Dispatch<Action>;
  value: string;
}

export const MessageTextArea: React.FC<Props> = ({ dispatch, value }) => {
  return (
    <div className="message-text">
      Type your message here...
      <textarea
        onChange={(e) =>
          dispatch({
            type: "UPDATE_MESSAGE",
            payload: (e.target as HTMLTextAreaElement).value,
          })
        }
        value={value}
      ></textarea>
    </div>
  );
};
