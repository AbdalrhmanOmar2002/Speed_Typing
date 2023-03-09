import React, { useState } from "react";
import useLevel from "./../hooks/useLevel";

const Levels = () => {
  // const [level, setLevel] = useState({ CountSecond: "", NumberOfWords: "" });
  const { level, setLevel } = useLevel();

  return (
    <>
      <div className=" flex gap-12">
        <button
          className="w-32 h-16 rounded bg-white border-[0] border-slate-500 shadow-3xl text-primary-500 text-lg font-semibold appearance-none box-border select-none touch-action white-space will-change-transform focus:shadow-3xlF hover:shadow-3xlH hover:translate-y-[-2px]  active:shadow-3xlA active:translate-y-[2px]"
          onClick={() =>
            setLevel({
              CountSecond: (level.CountSecond = "2"),
              NumberOfWords: (level.NumberOfWords = "8"),
            })
          }
        >
          Easy
        </button>
        <button
          className="w-32 h-16 rounded bg-white border-[0] border-slate-500 shadow-3xl text-primary-500 text-lg font-semibold appearance-none box-border select-none touch-action white-space will-change-transform focus:shadow-3xlF hover:shadow-3xlH hover:translate-y-[-2px]  active:shadow-3xlA active:translate-y-[2px]"
          onClick={() =>
            setLevel({
              CountSecond: (level.CountSecond = "1.5"),
              NumberOfWords: (level.NumberOfWords = "12"),
            })
          }
        >
          Medium
        </button>
        <button
          className="w-32 h-16 rounded bg-white border-[0] border-slate-500 shadow-3xl text-primary-500 text-lg font-semibold appearance-none box-border select-none touch-action white-space will-change-transform focus:shadow-3xlF hover:shadow-3xlH hover:translate-y-[-2px]  active:shadow-3xlA active:translate-y-[2px]"
          onClick={() =>
            setLevel({
              CountSecond: (level.CountSecond = "1"),
              NumberOfWords: (level.NumberOfWords = "20"),
            })
          }
        >
          Hard
        </button>
      </div>
    </>
  );
};

export default Levels;
