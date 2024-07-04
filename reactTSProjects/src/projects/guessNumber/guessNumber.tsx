import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import "./guessNumber.css"

const GuessNumber: React.FC = () => {
  const [answer, setAnswer] = useState<number>(0);
  const [userGuess, setUserGuess] = useState<number>(0);
  const [message, setMessage] = useState<string>("");
  const [guesses, setGuesses] = useState<number[]>([]);

  useEffect(() => {
    setAnswer(Math.floor(Math.random() * 101));
  }, []);

  const handleMessage = (): string => {
    setGuesses([...guesses, userGuess]);
    if (userGuess === answer) {
      return "Correct!";
    } else if (userGuess > answer) {
      return "Too High!";
    } else {
      return "Too Low!";
    }
  };

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    setMessage(handleMessage());
  };

  return (
    <div id="container">
      <h1>Guess a Number between 0-100</h1>
      <form onSubmit={(e: FormEvent) => handleSubmit(e)}>
        <input
          id="numField"
          type="number"
          min={0}
          max={100}
          placeholder="0-100"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setUserGuess(Number(e.target.value))
          }
        />
        <input type="submit" value="Guess" />
      </form>
      {message ? <h1>{message}</h1> : null}
      <div id="guesses">
        {guesses.map((num, idx) => (
          <div key={idx}>{num}</div>
        ))}
      </div>
    </div>
  );
};

export default GuessNumber;
