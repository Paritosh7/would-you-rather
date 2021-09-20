import { _getQuestions as getQuestions, _getUsers as getUsers } from "../_DATA";
import { setAuthedUser } from "./authedUser";
import { receiveQuestions } from "./questions";
import { receiveUsers } from "./users";

export default function handleInitialUserData(id) {
  return (dispatch) => {
    (async function () {
      const users = await getUsers();
      const questions = await getQuestions();
      /**
       * TODO : I need to learn how to batch multiple dispatch
       * calls to avoid multiple rerenders.
       */
      dispatch(receiveQuestions(questions));
      dispatch(receiveUsers(users));
      dispatch(setAuthedUser(id));
    })();
  };
}
