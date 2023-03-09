import { faker } from "@faker-js/faker";
import { useCallback, useState } from "react";

const generateWords = (count: number) => {
  return faker.hacker.phrase();
};

const useWords = (count: number) => {
  const [words, setWords] = useState(generateWords(count));

  const updateWords = useCallback(() => {
    setWords(generateWords(count));
  }, []);

  return { words, updateWords };
};

export default useWords;
