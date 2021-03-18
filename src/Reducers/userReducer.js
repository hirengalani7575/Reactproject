import * as actionTypes from "../Actions/ActionTypes";

const users = (state = { data: [] }, action) => {
  switch (action.type) {
    case actionTypes.CREATE_USER:
    
      return {
        ...state,
        data: [...state.data, Object.assign({},action.user)],
      };
    default:
      return state;
  }
};

export default users;
