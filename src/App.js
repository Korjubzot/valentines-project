import { useState } from "react";
import "./App.css";

const phrases = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Pretty please",
  "Don't do this to meeeee",
  "My achey-breaky heart",
  "I'm gonna cry",
  "I'm gonna tell my mom",
  "I'm gonna tell my dad",
  "I'm gonna tell my dog",
  "I'm gonna tell my cat",
  "I'm gonna tell my goldfish",
  "Just say yes already!",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            alt="bears kissing"
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
          />
          <h1 className="text">Yay!!!</h1>{" "}
          <p>
            {`Happy Valentine's Day Lena!! You are my world - I'm so lucky to have
  you, and our little family. You're the most perfect girl I've ever
  had the pleasure of meeting. Every day I'm proud to be your partner,
  and stunned by the way you've turned Starlike into something that
  improves so many lives. You've certainly made mine better :)`}
          </p>
          <></>
          <p>Kocham cię</p>
          <p>Will</p>
        </>
      ) : (
        <>
          <img
            alt="bear with hearts"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            width="618"
            height="500"
          />{" "}
          <h1>Will you be my Valentine?</h1>
          <div>
            <button
              className="yes-button"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button onClick={handleNoClick} className="no-button">
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
