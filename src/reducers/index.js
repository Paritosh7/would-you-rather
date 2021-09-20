import { combineReducers } from "redux";
import authedUser from "./authedUser";
import questions from "./questions";
import users from "./users";

const reducers = combineReducers({ authedUser, users, questions });

export default reducers;
