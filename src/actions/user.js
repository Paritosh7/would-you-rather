export const RECEIVE_USER = "ADD_USER";

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user: user,
});
