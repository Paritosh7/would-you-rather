export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_QUESTION_TO_AUTHED_USER = "ADD_QUESTION_TO_AUTHED_USER";
export const SAVE_QUESTION_ANSWER_TO_AUTHED_USER =
  "SAVE_QUESTION_ANSWER_TO_AUTHED_USER";

export const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users: users,
});

export const addQuestionToAuthedUser = (questionId, authedUser) => ({
  type: ADD_QUESTION_TO_AUTHED_USER,
  questionId,
  authedUser,
});

export const saveQuestionAnswerToAuthedUser = ({
  authedUser,
  qid,
  answer,
}) => ({
  type: SAVE_QUESTION_ANSWER_TO_AUTHED_USER,
  authedUser,
  qid,
  answer,
});
