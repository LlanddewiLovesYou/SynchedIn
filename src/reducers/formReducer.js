export const formReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ID_TO_RECIPIENTS":
      console.log({
        ...state,
        recipients: [...state.recipients, action.payload],
      });
      return { ...state, recipients: [...state.recipients, action.payload] };
    case "REMOVE_ID_FROM_RECIPIENTS":
      return {
        ...state,
        recipients: state.recipients.filter((id) => id !== action.payload),
      };
    case "UPDATE_MESSAGE":
      console.log("state", state);
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
};
