import { combineReducers } from "redux";
import authedUser from "./authedUser";
import questions from "./questions";
import user from "./users";

const reducers = combineReducers({ authedUser, user, questions });

export default reducers;
