# Would You Rather Project

This project was part of Udacity's Nano degree program.

> This is a simple " Would you rather ?" game. The user is asked a simple question with two choices but can choose only one option. In addition, the user has the ability to post questions, look at the current leaderboard. Keep track of number of questions he/she answered and more.

# Tech Stack

1. HTML
2. CSS
3. JS (ES5, ES6)
4. ReactJS
5. Redux
6. React Router

## Data

The starter code will consist of a \_DATA.js file, which represents a fake database and contain methods that let you access the data.

The code will talk to the database via 4 methods:

- [`_getUsers()`](#_getUsers)
- [`_getQuestions()`](#_getQuestions)
- [`_saveQuestion(question)`](#_saveQuestion)
- [`_saveQuestionAnswer(object)`](#_saveQuestionAnswer)

```js
_getUsers();
```

_Description_: Get all of the existing users from the database.  
_Return Value_: Object where the key is the user’s id and the value is the user object.

```js
_getQuestions();
```

_Description_: Get all of the existing questions from the database.  
_Return Value_: Object where the key is the question’s id and the value is the question object.

```js
_saveQuestion(question);
```

_Description_: Save the polling question in the database.  
_Parameters_: Object that includes the following properties: `author`, `optionOneText`, and `optionTwoText`. More details about these properties:

| Attribute     | Type   | Description                                |
| ------------- | ------ | ------------------------------------------ |
| author        | String | The id of the user who posted the question |
| optionOneText | String | The text of the first option               |
| optionTwoText | String | The text of the second option              |

_Return Value_: An object that has the following properties: `id`, `author`, `optionOne`, `optionTwo`, `timestamp`. More details about these properties:

| Attribute | Type   | Description                                                                                                                  |
| --------- | ------ | ---------------------------------------------------------------------------------------------------------------------------- |
| id        | String | The id of the question that was posted                                                                                       |
| author    | String | The id of the user who posted the question                                                                                   |
| optionOne | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option |
| optionTwo | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option |
| timestamp | String | The time when the question was created                                                                                       |

4. `_saveQuestionAnswer(object)` Method

_Description_: Save the answer to a particular polling question in the database.
_Parameters_: Object that contains the following properties: `authedUser`, `qid`, and `answer`. More details about these properties:

| Attribute  | Type   | Description                                                                             |
| ---------- | ------ | --------------------------------------------------------------------------------------- |
| authedUser | String | The id of the user who answered the question                                            |
| qid        | String | The id of the question that was answered                                                |
| answer     | String | The option the user selected. The value should be either `"optionOne"` or `"optionTwo"` |

## Installation

First clone the project. Then in the root directory of your project open terminal, run

```bash
yarn install
```

After all the relevant dependencies are added, you need to run a server (local machine). In the terminal, run

```bash
yarn start
```

You are all set! Keep coding!
