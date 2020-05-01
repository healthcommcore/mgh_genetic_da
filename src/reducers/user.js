const initialState = { 
  userid: "", 
  cancerType: "",
  site: "",
  values: {},
  test: {
    doYouWantGeneticTest: null,
    notReadyToDecide: [],
    testTypes: null,
    notSureWhichTest: [],
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
        console.log(stateCopy);
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
  let set = new Set(stateCopy.test[name]);
  set.has(value) ? set.delete(value) : set.add(value);
  return stateCopy.test[name] = Array.from(set);
  /*
  */
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
