import { FC } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Choice, Question } from 'store/action-types/questions.types';
import { createPollUrl, calculatePercentage } from 'utils';
import "./styles.css";

interface PollProps {
  poll: Question
}

const Poll: FC<PollProps> = ({ poll }) => {

  const handleCopyLink = () => {
    navigator.clipboard.writeText(createPollUrl(poll?.id || "")).then(() => alert('Link copied'));
  }

  return (
    <Card className="my-3">
      <Card.Body>
        <Card.Title className="mb-3">{poll.question}</Card.Title>
        <Card.Subtitle className="text-muted mb-3 poll__subtitle">{createPollUrl(poll?.id || "")}</Card.Subtitle>
        <Card.Text className="mb-3">Total votes: {poll.voters?.length || 0}</Card.Text>
        <div className="percentages__container">
          {poll.choices.map((choice: Choice) => (
            <div key={choice.id}>
              <span className="mx-2">
                <b>{choice.text}</b>: {calculatePercentage(choice.votes, poll.voters?.length)} %
                </span>
            </div>
          ))}
        </div>
        <Button variant="outline-success" onClick={handleCopyLink}>Copy poll link</Button>
      </Card.Body>
    </Card>
  )
}

export default Poll;