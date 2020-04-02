const initialState = { 
  userid: "", 
  cancerType: "",
  site: "",
  values: {},
  testChoice: "",
  testOption: ""
};

const user = (state = initialState, action) => {
  let fakeState = {};
  switch(action.type) {
    case `SET_USER`:
      return Object.assign({}, state, { ...action.userInfo });
    case `SET_VALUE`:
      fakeState.values = state.values;
      fakeState.values[action.valueInfo.target.name] = action.valueInfo.target.value;
      return Object.assign({}, state, { ...fakeState });
    default:
      return state;
  }
}

export default user;
