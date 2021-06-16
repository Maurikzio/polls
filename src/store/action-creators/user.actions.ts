import { SET_USER, User, UserActions } from '../action-types/user.types';

export const setUser = (user: User): UserActions => {
  return {
    type: SET_USER,
    payload: user
  }
}