const setUser = (userInfo) => {
  return {
    type: `SET_USER`,
    userInfo
  }
}

const initializeMenu = (drupalMenu) => {
  return {
    type: `INITIALIZE`,
    drupalMenu
  }
}

const isCurrent = (item) => {
  return {
    type: `IS_CURRENT`,
    item
  }
}


export { setUser, initializeMenu };
