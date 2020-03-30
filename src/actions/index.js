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

const initializeMenu = (drupalMenu) => {
  return {
    type: `INITIALIZE`,
    drupalMenu
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


export { setUser, initializeMenu, advance, retreat };
