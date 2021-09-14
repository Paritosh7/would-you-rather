import React from "react";
import { Question } from "./Question";
export function QuestionsContainer({ questionIds }) {
  return (
    <ul>
      {questionIds.map((id) => {
        return (
          <li key={id}>
            <Question id={id} />
          </li>
        );
      })}
    </ul>
  );
}
