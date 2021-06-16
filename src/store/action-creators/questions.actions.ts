import { addVoteInLocalStorage } from "utils";
import {
  ADD_QUESTION,
  VOTE_QUESTION,
  Question,
  QuestionActions,
  Choice,
  LOAD_POLL,
} from "../action-types/questions.types";
import { User } from "../action-types/user.types";

export const addInitialPoll = (poll: Question[]): QuestionActions => {
  return {
    type: LOAD_POLL,
    payload: poll,
  };
};

export const addQuestion = (question: Question): QuestionActions => {
  return {
    type: ADD_QUESTION,
    payload: question,
  };
};

export const voteQuestion = (
  id: string,
  voter: User,
  choice: Choice
): QuestionActions => {
  const updatedVotes = addVoteInLocalStorage(id, voter, choice);
  return {
    type: VOTE_QUESTION,
    payload: updatedVotes,
  };
};
