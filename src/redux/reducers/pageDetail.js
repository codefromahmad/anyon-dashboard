const initialState = {
  history: false,
  profile: false,
  changePassword: false,
  addBank: false,
  accountInformation: null,
  reload: false,
  profileComp: "",
  expanded: false,
  confirm: false,
  stockSelected: null,
};

const pageDetail = (state = initialState, action) => {
  switch (action.type) {
    case "setHistory":
      return {
        ...state,
        history: action.payload,
      };
    case "setProfile":
      return {
        ...state,
        profile: action.payload,
      };
    case "setProfileComp":
      return {
        ...state,
        profileComp: action.payload,
      };

    case "setChangePassword":
      return {
        ...state,
        changePassword: action.payload,
      };

    case "setAddBank":
      return {
        ...state,
        addBank: action.payload,
      };

    case "setAccountInformation":
      return {
        ...state,
        accountInformation: action.payload,
      };

    case "setReload":
      return {
        ...state,
        reload: action.payload,
      };

    case "setExpanded":
      return {
        ...state,
        expanded: action.payload,
      };

    case "setConfirm":
      return {
        ...state,
        confirm: action.payload,
      };

    case "setStockSelected":
      return {
        ...state,
        stockSelected: action.payload,
      };

    default:
      return state;
  }
};

export default pageDetail;
