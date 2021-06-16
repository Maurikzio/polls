import React, { FC } from 'react';
import { v4 } from 'uuid';
import { Choice } from 'store/action-types/questions.types';
import "./styles.css";

interface InputProps {
  choiceData: Choice;
  onRemove: (id: string) => void;
  onAddNewChoice: (choice: Choice) => void;
  isLast: boolean;
  onChoiceChange: (id: string, value: string) => void;
}

const Input: FC<InputProps> = ({ choiceData, onRemove, onAddNewChoice, isLast, onChoiceChange }) => {

  const handleAddNewChoice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = e;
    if (isLast && value.length === 1) {
      const newChoice: Choice = {
        id: v4(),
        text: "",
        votes: 0
      };
      onAddNewChoice(newChoice)
    }
    onChoiceChange(choiceData.id, value);
  }

  return (
    <div className="input__container">
      <input
        value={choiceData.text}
        onChange={handleAddNewChoice}
        className="form-control"
        placeholder="enter choice"
      />
      <div className="btn__remove">
        <span
          onClick={() => onRemove(choiceData.id)}
        >x</span>
      </div>
    </div>
  )
};

export default Input;