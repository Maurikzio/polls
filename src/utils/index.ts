import { Choice, Question } from "store/action-types/questions.types";
import { User } from "store/action-types/user.types";

export function addPollToLocalStorage(name: string, value?: Question) {
  const currentQuestions = localStorage.getItem(name) || "";
  const data = JSON.parse(currentQuestions);
  data.push(value);
  localStorage.setItem("polls", JSON.stringify(data));
}

export function addVoteInLocalStorage(id: string, voter: User, vote: Choice) {
  const currentQuestions = localStorage.getItem("polls") || "";
  const data = JSON.parse(currentQuestions);

  const updatedQuestions = data.map((question: Question) => {
    if (question.id === id) {
      return {
        ...question,
        voters: question.voters?.concat(voter.id),
        votes: question.choices.map((choice) =>
          choice.id === vote.id ? (choice.votes += 1) : choice
        ),
      };
    } else {
      return question;
    }
  });

  localStorage.setItem("polls", JSON.stringify(updatedQuestions));
  return updatedQuestions;
}

export function createPollUrl(id: string | "") {
  if (!id) {
    return "Invalid ID";
  }
  return `${window.location.origin}/poll/${id}`;
}

export function calculatePercentage(percent: number = 0, total: number = 0) {
  const res = total ? (percent * 100) / total : 0;
  return Math.trunc(res);
}
