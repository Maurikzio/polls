import { FC } from 'react';
import { useSelector } from 'react-redux';
import Poll from 'components/Poll';
import { AppState } from 'store/reducers/rootReducer';


const MyPolls: FC = () => {
  const { questions } = useSelector((state: AppState) => state.polls);
  const user = useSelector((state: AppState) => state.user);

  return (
    <div className="container">
      {questions.filter(item => item.userId === user?.id).map(question => (
        <Poll poll={question} key={question.id} />
      ))}
    </div>
  )
};

export default MyPolls;