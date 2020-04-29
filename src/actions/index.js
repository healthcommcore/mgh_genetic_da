const setUser = (userInfo) => {
  return {
    type: `SET_USER`,
    userInfo
  }
}

const setValue = (e) => {
  return {
    type: `SET_VALUE`,
    valueInfo: e
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
  console.log(path);
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


export { setUser, setValue, setTestInput, initializeMenu, advance, retreat, setNewCurrent, adminLogin };
