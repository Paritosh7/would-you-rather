import { _getQuestions as getQuestions, _getUsers as getUsers } from "../_DATA";
import { setAuthedUser } from "./authedUser";
import { receiveQuestions } from "./questions";
import { receiveUser } from "./user";

export function handleInitialUserData(id) {
  return async (dispatch) => {
    const users = getUsers();
    const questions = getQuestions();
    dispatch(setAuthedUser(id));
    dispatch(receiveUser(users));
    dispatch(receiveQuestions(questions));
  };
}
