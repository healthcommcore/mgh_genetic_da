const initialState = { 
  user: {}, 
  values: {},
  testChoice: "",
  testOption: ""
};

const user = (state = initialState, action) => {
  switch(action.type) {
    case "SET_USER":
      return Object.assign({}, state, action.userInfo);
    default:
      return state;
  }
}

export default user;
