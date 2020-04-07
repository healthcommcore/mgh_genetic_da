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
  let newNavPaths;
  switch(action.type) {
    case `INITIALIZE`:
      navMan.initialize(action.drupalMenu);
      return Object.assign(
        {}, state, { 
          menuItems: navMan.getMenuItems(),
          navPaths: navMan.getNavPaths()
        } 
      );
    case `ADVANCE`:
      newNavPaths = navMan.advance().getNavPaths();
      return Object.assign(
        {}, state, 
        { navPaths: newNavPaths }
      );
    case `RETREAT`:
      newNavPaths = navMan.retreat().getNavPaths();
      return Object.assign(
        {}, state, 
        { navPaths: newNavPaths }
      );
    case `SET_NEW_CURRENT`:
      navMan.setNewCurrent(action.path);
    default:
      return state;
  }
}

export default navigation;
