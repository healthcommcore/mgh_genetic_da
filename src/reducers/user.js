const initialState = { 
  userid: "", 
  cancerType: "",
  site: "",
  values: {},
  test: {
    doYouWantGeneticTest: null,
    notReadyToDecide: new Set(),
    testTypes: null,
    notSureWhichTest: new Set(),
    visibility: {
      yes: false,
      no: false,
      im: false
    }
  }
};

const user = (state = initialState, action) => {
  let stateCopy = JSON.parse(JSON.stringify(state));
  switch(action.type) {
    case `SET_USER`:
      return Object.assign({}, state, { ...action.userInfo });
    case `SET_VALUE`:
      stateCopy.values[action.valueInfo.target.name] = action.valueInfo.target.value;
      return Object.assign({}, state, { ...stateCopy });
    case `SET_TEST_INPUT`:
      if (action.inputType === "checkbox") {
        handleCheckbox(stateCopy, action.inputName, action.inputValue);
      }
      else {
        if (action.inputName === "doYouWantGeneticTest") {
          handleVisibility(stateCopy, action.inputValue);
        }
        stateCopy.test[action.inputName] = action.inputValue;
      }
      return Object.assign({}, state, { ...stateCopy });
    default:
      return state;
  }
}

const handleCheckbox = (stateCopy, name, value) => {
  if (stateCopy.test[name] instanceof Set) {
    return stateCopy.test[name].has(value) ? stateCopy.test[name].delete(value) : stateCopy.test[name].add(value);
  }
  let set = new Set();
  set.add(value);
  return stateCopy.test[name] = set;
}

const handleVisibility = (stateCopy, selected) => {
  const currVisibilities = stateCopy.test.visibility;
  const response = selected.split(" ")[0].replace(/\W/, "").toLowerCase();
  Object.keys(currVisibilities).forEach( (key) => {
    if (key === response) {
      stateCopy.test.visibility[key] = true;
    }
    else {
      stateCopy.test.visibility[key] = false;
    }
  });
}

export default user;
