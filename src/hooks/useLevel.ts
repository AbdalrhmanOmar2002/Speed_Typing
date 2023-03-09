import { useState } from "react";

const useLevel = () => {
  const [level, setLevel] = useState({ CountSecond: "", NumberOfWords: "" });
  return { level, setLevel };
};

export default useLevel;
