import { SET_USER, User, UserActions } from '../action-types/user.types';

const user = JSON.parse(localStorage.getItem('user') || "{}")

export const UserReducer = (state: User = user, action: UserActions): User => {
  switch(action.type){
    case SET_USER:
      return action.payload
    default:
      return state;
  }
}