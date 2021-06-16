import { combineReducers } from 'redux';
import { QuestionsReducer } from './questions.reducer';
import { UserReducer } from './user.reducer';

export const rootReducer = combineReducers({
  polls: QuestionsReducer,
  user: UserReducer
});

export type AppState = ReturnType<typeof rootReducer>