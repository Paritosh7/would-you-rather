export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const SAVE_QUESTION_ANSWER = "SAVE_QUESTION_ANSWER";

export const receiveQuestions = (questions) => ({
  type: RECEIVE_QUESTIONS,
  questions,
});

export const addQuestion = (question) => ({
  type: ADD_QUESTION,
  question,
});

export const saveQuestionAnswer = ({ authedUser, qid, answer }) => ({
  type: SAVE_QUESTION_ANSWER,
  authedUser,
  qid,
  answer,
});
