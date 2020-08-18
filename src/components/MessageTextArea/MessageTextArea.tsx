import React, { Dispatch } from "react";
import "./MessageTextArea.scss";
import { Action } from "../../interfaces/Action.interface";

export interface Props {
  dispatch: Dispatch<Action>;
}

export const MessageTextArea: React.FC<Props> = ({ dispatch }) => {
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
      ></textarea>
    </div>
  );
};
