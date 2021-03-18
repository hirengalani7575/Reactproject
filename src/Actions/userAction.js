import * as actionTypes from './ActionTypes';

export const createUser = (user) => {
    return {
      type: actionTypes.CREATE_USER,
      user: user
    }
  };
