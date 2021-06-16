import { FC, useState } from 'react';
import Input from "components/Input";
import Preview from 'components/Preview';
import { AppState } from 'store/reducers/rootReducer';
import { Choice, Question } from 'store/action-types/questions.types';
import { addQuestion } from 'store/action-creators/questions.actions';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Col, Form, Row, Tab, Tabs } from 'react-bootstrap';
import { v4 } from 'uuid';
import "./styless.css";

const initialChoices: Choice[] = [
  { id: v4(), text: "", votes: 0 },
  { id: v4(), text: "", votes: 0 },
  { id: v4(), text: "", votes: 0 }
];

const MINIMUM_CHOICES = 4;
const MINIMUM_TEXT = 2;

const Home: FC = () => {
  const [question, setQuestion] = useState("");
  const [choices, setChoices] = useState<Choice[]>(initialChoices);
  const dispatch = useDispatch();
  const user = useSelector((state: AppState) => state.user);

  const handleChoiceChange = (id: string, value: string) => {
    setChoices(prevChoices =>
      prevChoices.map(choice => choice.id === id ? { ...choice, text: value } : choice)
    )
  }

  const handleAddNewChoice = (choice: Choice) => {
    setChoices(prevChoices => [...prevChoices, choice])
  }

  const handleRemoveChoice = (id: string) => {
    if (choices.length < MINIMUM_CHOICES) {
      return;
    }
    setChoices(prevChoices => prevChoices.filter(choice => choice.id !== id))
  };

  const handleSavePoll = () => {
    const questionData: Question = {
      id: v4(),
      question,
      choices: choices.filter(choice => choice.text),
      voters: [],
      userId: user?.id || ""
    };
    if (question && choices.filter(choice => choice.text).length > MINIMUM_TEXT) {
      dispatch(addQuestion(questionData));
      setQuestion("")
      setChoices(initialChoices)
    }
  }

  return (
    <div className="container py-5">
      <Row>
        <Col xs={12} md={8}>
          <Tabs defaultActiveKey="question" id="poll-tab">
            <Tab eventKey="question" title="Question" className="tab__wrapper">
              <Form>
                <Form.Row>
                  <Form.Group as={Col} className="pt-2 mb-5">
                    <Form.Label className=""> Question Text</Form.Label>
                    <Form.Control as="textarea" rows={3} value={question} onChange={(e) => setQuestion(e.target.value)} />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Choices</Form.Label>
                    {choices.map((choice, idx) => (
                      <div key={choice.id}>
                        <Input
                          choiceData={choice}
                          onRemove={handleRemoveChoice}
                          onAddNewChoice={handleAddNewChoice}
                          isLast={idx === choices.length - 1}
                          onChoiceChange={handleChoiceChange}
                        />
                      </div>
                    ))}
                  </Form.Group>
                </Form.Row>
                <Button variant="success" onClick={handleSavePoll} className="my-3">Save</Button>
              </Form>
            </Tab>

            <Tab eventKey="look" title="Look" className="tab__wrapper">
              <h3>Your account type is not allowed to customize your poll.</h3>
              <p>Dont worry! you can update your account <b>here</b></p>
            </Tab>
          </Tabs>
        </Col>
        <Col xs={12} md={4} className="py-5">
          <Preview question={{ question, choices, userId: user?.id || "" }} />
        </Col>
      </Row>
    </div>
  )
};

export default Home;