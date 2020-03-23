const setUser = (userInfo) => {
  return {
    type: `SET_USER`,
    userInfo
  }
}

const initiateNav = () => {
  return {
    type: `INITIATE`
  }
}

const isCurrent = (item) => {
  return {
    type: `IS_CURRENT`,
    item
  }
}

const was

export { setUser, initiateNav };
