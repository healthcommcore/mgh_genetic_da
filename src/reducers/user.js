const initialState = { 
  userid: "", 
  cancerType: "",
  site: "",
  notes: "",
  values: [],
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
    case `SET_NOTES`:
      stateCopy.notes = action.notes;
      return Object.assign({}, state, { ...stateCopy });
    case `SET_VALUE`:
      // Convert the "scale-<num>" string to just the <num> integer value
      let index = action.valueInfo.target.name.split("-").pop();
      index = Number(index);
      stateCopy.values[index] = {
        heading: action.heading,
        leftLabel: action.leftLabel,
        rightLabel: action.rightLabel,
        value: action.valueInfo.target.value
      }
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
