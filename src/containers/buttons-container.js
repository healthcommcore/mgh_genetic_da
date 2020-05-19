import React from "react";
import { connect } from "react-redux";
import { advance, retreat } from "../actions";
import PrevNextButtons from "../components/prev-next-buttons";

const mapStateToProps = (state, isOrphan) => {
  return { 
    prevNext: state.navigation.navPaths
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    advance: () => { 
      dispatch( advance() );
    },
    retreat: () => {
      dispatch( retreat() );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PrevNextButtons);
