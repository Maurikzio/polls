import {
  PollState,
  QuestionActions,
  ADD_QUESTION,
  VOTE_QUESTION,
  LOAD_POLL,
} from "../action-types/questions.types";

const polls = JSON.parse(localStorage.getItem("polls") || "[]");

const initialState: PollState = {
  questions: polls,
};

export const QuestionsReducer = (
  state: PollState = initialState,
  action: QuestionActions
): PollState => {
  switch (action.type) {
    case LOAD_POLL:
      return {
        questions: action.payload,
      };

    case ADD_QUESTION:
      return {
        questions: [...state.questions, action.payload],
      };

    case VOTE_QUESTION:
      return {
        ...state,
        questions: action.payload,
      };

    default:
      return state;
  }
};
