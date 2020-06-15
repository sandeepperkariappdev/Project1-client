import * as Types from './types';

export const loginUser = (email, password) => {
  return {
    type: Types.LOGIN_USER,
    email,
    password
  }
}

export const logoutUser = () => {
  return {
    type: Types.LOGOUT
  }
}
