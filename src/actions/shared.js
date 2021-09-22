import { _getQuestions as getQuestions, _getUsers as getUsers } from "../_DATA";
import {
  _saveQuestion as saveQuestion,
  _saveQuestionAnswer as saveQuestionAnswerAPI,
} from "../_DATA";
import { setAuthedUser } from "./authedUser";
import { addQuestion, receiveQuestions, saveQuestionAnswer } from "./questions";
import {
  addQuestionToAuthedUser,
  receiveUsers,
  saveQuestionAnswerToAuthedUser,
} from "./users";

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

export const handleAddQuestion = (question) => (dispatch) => {
  (async function () {
    const formattedQuestion = await saveQuestion(question);

    dispatch(addQuestion(formattedQuestion));
    const { id, author } = formattedQuestion;
    dispatch(addQuestionToAuthedUser(id, author));
  })();
};

export const handleSaveQuestionAnswer =
  (answerObj, notifyUnAnswered) => (dispatch) => {
    saveQuestionAnswerAPI(answerObj).then(() => {
      dispatch(saveQuestionAnswer(answerObj));
      dispatch(saveQuestionAnswerToAuthedUser(answerObj));
      notifyUnAnswered();
    });
  };
