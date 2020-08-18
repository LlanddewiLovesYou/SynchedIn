import { Contact } from "../interfaces/Contact.interface";
import { Action } from "../interfaces/Action.interface";
interface State {
  contacts: Contact[];
  message: string;
  recipients: string[];
}

export const formReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_ID_TO_RECIPIENTS":
      return { ...state, recipients: [...state.recipients, action.payload] };
    case "REMOVE_ID_FROM_RECIPIENTS":
      return {
        ...state,
        recipients: state.recipients.filter(
          (id: string) => id !== action.payload
        ),
      };
    case "UPDATE_MESSAGE":
      return {
        ...state,
        message: action.payload,
      };
    case "CLEAR_RECIPIENTS":
      return {
        ...state,
        recipients: [],
      };
    default:
      return state;
  }
};
