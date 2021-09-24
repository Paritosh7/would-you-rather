export function calcUnAnsweredQuestionIds(user, questions) {
  const questionIdsArr = Object.keys(questions);
  const unansweredQuesIds = questionIdsArr.filter(
    (id) => !user.answers.hasOwnProperty(id)
  );
  return sortByTimestamp(questions, unansweredQuesIds);
}

export function sortByTimestamp(questions, questionIds) {
  return questionIds.sort((a, b) => {
    return (
      new Date(questions[b].timestamp).getTime() -
      new Date(questions[a].timestamp).getTime()
    );
  });
}
