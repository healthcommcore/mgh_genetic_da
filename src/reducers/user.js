const initialState = { 
  userid: "", 
  cancerType: "",
  site: "",
  values: {},
  test: {
    want: null,
    notReadyToDecide: null,
    testTypes: null,
    notSureWhichTest: new Set()
  }
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
    case `SET_TEST_INPUT`:
      fakeState.test = state.test;
      if (action.inputType === "checkbox") {
        handleCheckbox(fakeState, action.inputName, action.inputValue);
      }
      else {
        fakeState.test[action.inputName] = action.inputValue;
      }
      return Object.assign({}, state, { ...fakeState });
    default:
      return state;
  }
}

const handleCheckbox = (fakeState, name, value) => {
  if (fakeState.test[name] instanceof Set) {
    return fakeState.test[name].has(value) ? fakeState.test[name].delete(value) : fakeState.test[name].add(value);
  }
  let set = new Set();
  set.add(value);
  return fakeState.test[name] = set;
}

export default user;
