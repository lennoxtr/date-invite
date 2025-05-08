import React, { useState } from 'react';
import './App.css';
import Bubbles from './Bubbles';
import Tulips from './Tulips';

function App() {
  const MAX_SHRINKS = 3;
  const SHRINK_STEP = 0.2;

  const [noCount, setNoCount] = useState(0);
  const [noPos, setNoPos]     = useState({ top: '50%', left: '60%' });
  const [answeredYes, setAnsweredYes] = useState(false);
  const [question, setQuestion] = useState('Hélu em Mai 🌼. Thứ 7 này đi chơi với anh đi!');

  const images = [
    `${process.env.PUBLIC_URL}/images/khang1.jpg`,
    `${process.env.PUBLIC_URL}/images/khang2.jpg`,
    `${process.env.PUBLIC_URL}/images/tulipmania.jpg`
  ];

  const gifs = [
    `${process.env.PUBLIC_URL}/images/dudu-bear.gif`,
    `${process.env.PUBLIC_URL}/images/dudu-bear2.gif`
  ];

  const [imgIndex, setImgIndex] = useState(0);
  const [gifIndex, setGifIndex] = useState(0);

  const handleYes = () => {
    setGifIndex(0);
    setAnsweredYes(true);
  }

  const handleNo = () => {
    setImgIndex(1);
    if (noCount < MAX_SHRINKS) {
      setNoCount(c => c + 1);
      setQuestion("Eo ơi em ấn khum thật à :(((");
    } else {
      setGifIndex(1);
      setQuestion("Lêu lêuuu giỏi thì ấn típ đi");
      const top  = 10 + Math.random() * 80; 
      const left = 10 + Math.random() * 80;
      setNoPos({ top: `${top}%`, left: `${left}%` });
    }
  };

  // If she clicks Yes
  if (answeredYes) {
    return (
      <div className="App">
        <Bubbles />
        <h2> Yayy. Thứ 7 này ngắm hoa với anh nhé. Đẹp lắm đóo </h2>
        <img
          src={images[2]}
          alt="Date idea"
          className="picture"
        />
        <img
        src={gifs[gifIndex]}
        alt="Cute dancing bear"
        className="dancing-bear"
      />
      </div>
    );
  }

  // compute how much to shrink
  const noScale = 1 - noCount * SHRINK_STEP;

  return (
    <div className="App">
      <Bubbles />
      <Tulips />
      <h1>{question}</h1>

      <img
        src={images[imgIndex]}
        alt="Date idea"
        className="picture"
      />

      <div className="buttons">
        <button className="yes" onClick={handleYes}>
          Ỏ. Đi chứ đi chứ 😊
        </button>
        <button
          className="no"
          onClick={handleNo}
          style={{
            transform: `scale(${noScale})`,
            transition: 'transform 0.2s ease, top 0.2s ease, left 0.2s ease',
            ...(noCount >= MAX_SHRINKS
              ? {
                  position: 'absolute',
                  top: noPos.top,
                  left: noPos.left,
                }
              : {})
          }}
        >
          Khum đi chơi với anh Khang âu 😢
        </button>
      </div>
      {!answeredYes && noCount > MAX_SHRINKS && (
        <img
          src={gifs[gifIndex]}
          alt="Cute dancing bear"
          className="dancing-bear"
          />
      )}
    </div>
  );
}

export default App;
