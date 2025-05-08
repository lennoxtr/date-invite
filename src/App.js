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
  const [question, setQuestion] = useState('Helu cậu. Thứ 7 này tớ rủ cậu đi chơi nhé');

  const images = [
    'https://lightsbythelake.nparks.gov.sg/images/Activities/Movie_Night.jpg',
    'https://www.gardensbythebay.com.sg/en/things-to-do/calendar-of-events/tulipmania-2025/_jcr_content/root/container/container_copy/container_572231966/image_81910045_copy.coreimg.jpeg/1742975513645/2025-tulipmania-website-kv-1920x1080.jpeg',
  ];
  const [imgIndex, setImgIndex] = useState(0);

  const nextImage = () =>
    setImgIndex(i => (i + 1) % images.length);

  const handleYes = () => setAnsweredYes(true);

  const handleNo = () => {
  
    if (noCount < MAX_SHRINKS) {
      setNoCount(c => c + 1);
      setQuestion("Từ chối anh khum dễ vậy âu");
    } else {
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
        <h2> Yayy. Thứ 7 này ngắm hoa với anh nhéee </h2>
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
    </div>
  );
}

export default App;
