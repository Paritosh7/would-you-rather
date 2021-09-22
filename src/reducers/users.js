import {
  ADD_QUESTION_TO_AUTHED_USER,
  RECEIVE_USERS,
  SAVE_QUESTION_ANSWER_TO_AUTHED_USER,
} from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return action.users;

    case ADD_QUESTION_TO_AUTHED_USER:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          questions: [...state[action.authedUser].questions, action.questionId],
        },
      };

    case SAVE_QUESTION_ANSWER_TO_AUTHED_USER:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.qid]: action.answer,
          },
        },
      };

    default:
      return state;
  }
}
