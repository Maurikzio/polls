import { FC } from 'react';
import { useSelector } from 'react-redux';
import Poll from 'components/Poll';
import { AppState } from 'store/reducers/rootReducer';

const AllPolls: FC = () => {
  const { questions } = useSelector((state: AppState) => state.polls);

  return (
    <div className="container py-5">
      {questions.map(question => (
        <Poll poll={question} key={question.id} />
      ))}
    </div>
  )
};

export default AllPolls;