const setUser = (userInfo) => {
  return {
    type: `SET_USER`,
    userInfo
  }
}

const setNotes = (notes) => {
  return {
    type: `SET_NOTES`,
    notes
  }
}

const setValue = (e, heading) => {
  return {
    type: `SET_VALUE`,
    valueInfo: e,
    heading
  }
}

const setTestInput = (inputName, inputValue, inputType) => {
  return {
    type: `SET_TEST_INPUT`,
    inputName,
    inputValue,
    inputType
  }
}

const initializeMenu = (drupalMenu) => {
  return {
    type: `INITIALIZE`,
    drupalMenu
  }
}

const setNewCurrent = (path) => {
  return {
    type: `SET_NEW_CURRENT`,
    path
  }
}

const advance = () => {
  return {
    type: `ADVANCE`,
  }
}

const retreat = () => {
  return {
    type: `RETREAT`,
  }
}

const isCurrent = (item) => {
  return {
    type: `IS_CURRENT`,
    item
  }
}

const adminLogin = (submitted) => {
  return {
    type: `ADMIN_LOGIN`,
    submitted
  }
}


export { 
  setUser, 
  setNotes,
  setValue, 
  setTestInput, 
  initializeMenu, 
  advance, 
  retreat, 
  setNewCurrent, 
  adminLogin 
};
