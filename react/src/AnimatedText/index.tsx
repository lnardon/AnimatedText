import React from "react";

export interface AnimatedTextProps {
  text: string;
}

export const AnimatedTextLetters: React.FC<AnimatedTextProps> = ({ text }) => {
  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
};
