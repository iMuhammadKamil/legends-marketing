"use client";

import { useState } from "react";

const questions = [
  {
    id: "budget",
    question: "What is your investment budget?",
    options: ["Under PKR 2M", "PKR 2M - 5M", "PKR 5M - 10M", "PKR 10M+"],
  },
  {
    id: "type",
    question: "What type of investment are you looking for?",
    options: ["Residential", "Commercial", "Mixed"],
  },
  {
    id: "timeline",
    question: "When do you plan to invest?",
    options: ["Immediate", "3 Months", "6 Months", "Researching"],
  },
];

export default function InvestmentQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  function handleAnswer(value: string) {
    const q = questions[step];
    setAnswers((prev) => ({ ...prev, [q.id]: value }));
    if (step < questions.length - 1) {
      setStep((s) => s + 1);
    }
  }

  function reset() {
    setStep(0);
    setAnswers({});
  }

  const done = step === questions.length;

  if (done) {
    return (
      <div className="tool-quiz">
        <h2>Your Investment Profile</h2>
        <ul>
          {Object.entries(answers).map(([key, value]) => (
            <li key={key}>
              {key}: {value}
            </li>
          ))}
        </ul>
        <button type="button" onClick={reset}>
          Start Over
        </button>
      </div>
    );
  }

  const q = questions[step];

  return (
    <div className="tool-quiz">
      <p>
        Question {step + 1} of {questions.length}
      </p>
      <h2>{q.question}</h2>
      {q.options.map((option) => (
        <button key={option} type="button" onClick={() => handleAnswer(option)}>
          {option}
        </button>
      ))}
    </div>
  );
}