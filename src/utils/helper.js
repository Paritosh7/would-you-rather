export function calcUnAnsweredQuestionIds(user, questions) {
  const questionIdsArr = Object.keys(questions);
  const unansweredQuesIds = questionIdsArr.filter(
    (id) => !user.answers.hasOwnProperty(id)
  );
  return unansweredQuesIds;
}
