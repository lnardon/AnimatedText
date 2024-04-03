import React from 'react';
interface AnimatedTextProps {
    text: string;
    animation?: string;
    delay?: number;
    easing?: string;
    transitionOnlyDifferentLetters?: boolean;
    animationDuration?: number;
}
declare const AnimatedText: ({ text, animation, delay, easing, transitionOnlyDifferentLetters, animationDuration }: AnimatedTextProps) => React.JSX.Element;
export default AnimatedText;
