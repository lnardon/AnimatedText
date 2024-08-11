import { useState } from "react";
import AnimatedText from "./AnimatedText";
import "./App.css";

function App() {
  const [text, setText] = useState("Animated Text Demo");
  const [animation, setAnimation] = useState("fade-in");
  const [delay, setDelay] = useState(32);
  const [easing, setEasing] = useState("ease");
  const [transitionOnlyDifferentLetters, setTransitionOnlyDifferentLetters] =
    useState(false);
  const [duration, setDuration] = useState(1000);

  function copyToClipboard() {
    const el = document.createElement("textarea");
    el.value = `<AnimatedText text="${text}" animation="${animation}" delay={${delay}} easing="${easing}" transitionOnlyDifferentLetters={${transitionOnlyDifferentLetters}} animationDuration={${duration}}/>`;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    alert("Copied to clipboard!");
  }

  return (
    <div className="container">
      <div className="text">
        <AnimatedText
          text={text}
          animation={animation}
          delay={delay}
          easing={easing}
          transitionOnlyDifferentLetters={transitionOnlyDifferentLetters}
          animationDuration={duration}
        />
      </div>
      <div className="settings">
        <div className="input-container">
          <h3 className="input-title">Sample Text</h3>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Text"
            className="input"
          />
        </div>
        <div className="input-container">
          <h3 className="input-title">Animation</h3>
          <select
            onChange={(e) => setAnimation(e.target.value)}
            className="select"
          >
            <option value="fade-in">Fade In</option>
            <option value="pop-up">Pop Up</option>
            <option value="slide-down">Slide Down</option>
            <option value="slide-up">Slide Up</option>
            <option value="slide-left">Slide Left</option>
            <option value="slide-right">Slide Right</option>
            <option value="rotate-clockwise">Rotate Clockwise</option>
            <option value="rotate-counter-clockwise">
              Rotate Counter Clockwise
            </option>
            <option value="reveal-up">Reveal Up</option>
            <option value="reveal-down">Reveal Down</option>
            <option value="reveal-left">Reveal Left</option>
            <option value="reveal-right">Reveal Right</option>
            <option value="random">Random</option>
          </select>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            gap: "1rem",
          }}
        >
          <div className="input-container">
            <h3 className="input-title">Letters delay (ms)</h3>
            <input
              type="number"
              value={delay}
              onChange={(e) => setDelay(parseInt(e.target.value))}
              placeholder="Delay"
              className="input"
            />
          </div>
          <div className="input-container">
            <h3 className="input-title">Animation easing</h3>
            <input
              type="text"
              value={easing}
              onChange={(e) => setEasing(e.target.value)}
              placeholder="Easing"
              className="input"
            />
          </div>
        </div>
        <div className="input-container">
          <h3 className="input-title">Animation duration (ms)</h3>
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(parseInt(e.target.value))}
            placeholder="Delay"
            className="input"
          />
        </div>
        <div className="checkbox-container">
          <input
            type="checkbox"
            checked={transitionOnlyDifferentLetters}
            onChange={(e) =>
              setTransitionOnlyDifferentLetters(e.target.checked)
            }
            className="checkbox"
            id="transitionOnlyDifferentLetters"
          />
          <label
            className="checkbox-label"
            htmlFor="transitionOnlyDifferentLetters"
          >
            Transition only between different letters
          </label>
        </div>
        <button className="copy-btn" onClick={copyToClipboard}>
          Copy JSX Element
        </button>
      </div>
    </div>
  );
}

export default App;
