import NavManager from "../helpers/nav-manager";

const navMan = new NavManager();
const initialState = {
  current: "",
  previous: "",
  next: ""
}


const navigation = (state = initialState, action) => {
  switch(action.type) {
    case 'INITIALIZE':
      navMan.initialize();
      return state.current;
    case 'GET_CURRENT':
      return state.current;
    default:
      return state;
  }
}

export default navigation;
