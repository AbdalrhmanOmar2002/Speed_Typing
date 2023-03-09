import { ReactNode, useState } from "react";

import { faker } from "@faker-js/faker";
import RestartButton from "./components/RestartButton";
import Results from "./components/Results";
import UserTypings from "./components/UserTypings";
import useEngine from "./hooks/useEngine";
import { calculateAccuracyPercentage } from "./utils/helpers";
import Levels from "./components/Levels";

function App() {
  const { state, words, timeLeft, typed, errors, totalTyped, restart } =
    useEngine();

  return (
    <div className="flex flex-col gap-20">
      <CountdownTimer timeLeft={timeLeft} />
      <WordsContainer>
        <GeneratedWords words={words} />
        <UserTypings
          className="absolute inset-0  "
          userInput={typed}
          words={words}
        />
      </WordsContainer>
      <RestartButton
        className={"mx-auto mt-10 text-slate-500"}
        onRestart={restart}
      />
      <Results
        state={state}
        className="mt-10"
        error={errors}
        accuracyPercentage={calculateAccuracyPercentage(errors, totalTyped)}
        total={totalTyped}
      />
    </div>
  );
}

const WordsContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative text-3xl max-w-xl leading-relaxed break-all mt-3">
      {children}
    </div>
  );
};

const GeneratedWords = ({ words }: { words: string }) => {
  return <div className="text-slate-500 underline decoration-1 ">{words}</div>;
};
const CountdownTimer = ({ timeLeft }: { timeLeft: number | string }) => {
  return <h2 className="text-primary-400 font-medium">Time: {timeLeft} s</h2>;
};

export default App;
