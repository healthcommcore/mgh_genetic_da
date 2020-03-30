const initialState = { 
  userid: "", 
  cancerType: "",
  site: "",
  values: {},
  testChoice: "",
  testOption: ""
};

const user = (state = initialState, action) => {
  switch(action.type) {
    case `SET_USER`:
      return Object.assign({}, state, { ...action.userInfo });
    case `SET_VALUE`:
      console.log(action.valueInfo);
    default:
      return state;
  }
}

export default user;
