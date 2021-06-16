export const SET_USER = "LOAD_USER";

export interface User {
  name: string;
  id: string;
};

export interface LoadUserAction {
  type: typeof SET_USER;
  payload: User
};

export type UserActions =
  | LoadUserAction