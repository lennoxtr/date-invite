import React from 'react';
import './Tulips.css';

export default function Tulips() {
  // bump count from 7 up to 15
  const count = 10;
  return (
    <div className="tulips">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="tulip">🌷</span>
      ))}
    </div>
  );
}
