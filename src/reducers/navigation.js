import NavManager from "../helpers/nav-manager";

const navMan = new NavManager();

const initialState = {
  navPaths: {
    current: "",
    previous: false,
    next: false
  },
  menuItems: []
}


const navigation = (state = initialState, action) => {
  switch(action.type) {
    case `INITIALIZE`:
      navMan.initialize(action.drupalMenu);
      return Object.assign(
        {}, state, { 
          menuItems: navMan.getMenuItems(),
          navPaths: navMan.getNavigation()
        } 
      );
    case `GET_CURRENT`:
      return state.current;
    default:
      return state;
  }
}

export default navigation;
