import { ADD_SEARCH } from "../action";

const initState = {
  user:{}
}

export const usersReducer = function(state =initState ,action) {
  switch (action.type) {
    case ADD_SEARCH:
      return {...state,user:{...state.user,[action.payload.searchString]:action.payload.user}};
    default:
      return state;
  }
};