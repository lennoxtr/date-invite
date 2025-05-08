// src/Bubbles.js
import React from 'react';
import './Bubbles.css';

export default function Bubbles() {
  const bubbleCount = 20;
  return (
    <div className="bubbles">
      {Array.from({ length: bubbleCount }).map((_, i) => {
        // random size, horizontal start, delay, and speed
        const size     = Math.random() * 40 + 20;      // 20px–60px
        const left     = Math.random() * 100 + '%';    // 0%–100%
        const delay    = Math.random() * 8 + 's';      // 0s–8s
        const duration = Math.random() * 8 + 6 + 's';  // 6s–14s
        const opacity  = Math.random() * 0.5 + 0.3;    // 0.3–0.8

        return (
          <div
            key={i}
            className="bubble"
            style={{
              width: size + 'px',
              height: size + 'px',
              left,
              animationDelay: delay,
              animationDuration: duration,
              opacity
            }}
          />
        );
      })}
    </div>
  );
}
