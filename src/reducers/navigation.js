import { useStaticQuery, graphql } from "gatsby";

const initialState = {
  current: {},
  previous: {},
  next: {}
}

const navigation = (state = initialState, action) => {
  switch(action.type) {
    case 'GET_CURRENT':
      return state.current;
    default:
      return state;
  }
}

export default navigation;
