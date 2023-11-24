const initialState = {
  history: false,
};

const pageDetail = (state = initialState, action) => {
  switch (action.type) {
    case "setHistory":
      return {
        ...state,
        history: action.payload,
      };

    default:
      return state;
  }
};

export default pageDetail;
