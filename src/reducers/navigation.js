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
      console.log(navMan.getNavPaths());
      return Object.assign(
        {}, state, { 
          menuItems: navMan.getMenuItems(),
          navPaths: navMan.getNavPaths()
        } 
      );
    case `ADVANCE`:
      newNavPaths = navMan.advance().getNavPaths();
      console.log(newNavPaths);
      return Object.assign(
        {}, state.navigation.navPaths, 
        { ...newNavPaths }
      );
    case `RETREAT`:
      newNavPaths = navMan.retreat().getNavPaths();
      console.log(newNavPaths);
      return Object.assign(
        {}, state.navigation.navPaths, 
        { ...newNavPaths }
      );
    default:
      return state;
  }
}

export default navigation;
