export const LOAD_POLL = "LOAD_POLL";
export const ADD_QUESTION = "ADD_QUESTION";
export const VOTE_QUESTION = "VOTE_QUESTION";

export interface Choice {
  id: string;
  text: string;
  votes: number;
};

export interface Question {
  id?: string;
  question: string;
  choices: Choice[];
  voters?: string[];
  userId: string;
};

export interface PollState {
  questions: Question[]
};

export interface AddQuestionAction {
  type: typeof ADD_QUESTION;
  payload: Question
};

export interface VoteQuestionAction {
  type: typeof VOTE_QUESTION;
  payload: Question[]
}

export interface LoadPollAction {
  type: typeof LOAD_POLL;
  payload: Question[];
}

export type QuestionActions =
  | AddQuestionAction
  | VoteQuestionAction
  | LoadPollAction