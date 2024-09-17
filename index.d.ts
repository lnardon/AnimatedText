import React from 'react';
interface AnimatedTextProps {
    text: string;
    animation?: string;
    delay?: number;
    easing?: string;
    transitionOnlyDifferentLetters?: boolean;
    animationDuration?: number;
    style?: React.CSSProperties;
}
declare const AnimatedText: ({ text, animation, delay, easing, transitionOnlyDifferentLetters, animationDuration, style }: AnimatedTextProps) => React.JSX.Element;
export default AnimatedText;
