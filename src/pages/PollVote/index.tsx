import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Preview from 'components/Preview';
import { AppState } from 'store/reducers/rootReducer';
import { voteQuestion } from 'store/action-creators/questions.actions';
import { Choice } from 'store/action-types/questions.types';

interface PollVoteParams {
  id: string;
}

const PollVote: FC = () => {
  const { questions } = useSelector((state: AppState) => state.polls);
  const user = useSelector((state: AppState) => state.user);
  const { id } = useParams<PollVoteParams>();
  const dispatch = useDispatch();

  const qxToShow = questions.find(item => item.id === id);

  const handlePollVote = (choice: Choice) => {
    // const polls = localStorage.getItem('polls') || [];
    dispatch(voteQuestion(id, user, choice))
  }

  return (
    <div className="container py-5 ">
      <Preview question={qxToShow} onVote={handlePollVote} />
      <div className="d-flex justify-content-center py-2">
      </div>
    </div>
  )
};

export default PollVote;