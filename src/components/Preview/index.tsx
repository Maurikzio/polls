import { FC, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Choice, Question } from 'store/action-types/questions.types';
import { AppState } from 'store/reducers/rootReducer';
import { useHistory } from 'react-router-dom';
import { ALL_POLLS } from 'constants/paths';

interface PreviewProps {
  question?: Question;
  onVote?: (choice: Choice) => void;
}

const Preview: FC<PreviewProps> = ({ question, onVote }) => {
  const [choiceSelected, setChoiceSelected] = useState<Choice | null>(null);
  const user = useSelector((state: AppState) => state.user);
  const history = useHistory();

  const handleOnVote = () => {
    if (choiceSelected && onVote) {
      onVote(choiceSelected);
      history.push(ALL_POLLS);
    }
  }

  const hasAlreadyVoted = () => {
    return question?.voters ? question?.voters.includes(user.id) : true
  };

  const isEmptyList = () => {
    return question?.choices.every(choice => !choice.text)
  }

  return (
    <div className="container">
      {!isEmptyList() && <Card>
        <Card.Body>
          <Card.Title>{question?.question}</Card.Title>
          <Form>
            <Form.Group>
              {question?.choices.map(choice => (
                <Form.Check
                  key={choice.id}
                  type="checkbox"
                  label={choice.text}
                  onClick={() => setChoiceSelected(choice)}
                />
              ))}
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>}
      {onVote && <div className="d-flex justify-content-center mt-3">
        <Button
          disabled={hasAlreadyVoted()}
          variant="info"
          onClick={handleOnVote}
        >Vote
      </Button></div>}
    </div>
  )
};

export default Preview;