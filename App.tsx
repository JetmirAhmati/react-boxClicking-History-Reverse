import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [color, setColor] = useState('');
  const [clickedBox, setClickedBox] = useState([]);

  const onBoxClick = (i) => {
    if (clickedBox.includes(i)) {
      return;
    }

    setClickedBox([...clickedBox, i]);
    setColor('green');
  };

  const removeLastItemInArray = (array) => {
    if (array.length == 0) return;
    const newArr = [...array];
    newArr.pop();
    setClickedBox(newArr);
    setTimeout(() => removeLastItemInArray(newArr), 500);
  };

  useEffect(() => {
    if (clickedBox.length == 6) {
      setTimeout(() => removeLastItemInArray(clickedBox), 500);
    }
  }, [clickedBox]);

  return (
    <div>
      {[...Array(6)].map((i, index) => (
        <Box
          key={index}
          handleClick={() => onBoxClick(index)}
          setBackgroundColor={
            clickedBox.includes(index) ? 'green' : 'transparent'
          }
        />
      ))}
    </div>
  );
}

function Box({ handleClick, setBackgroundColor }) {
  return (
    <div
      style={{
        width: '50px',
        height: '50px',
        border: '1px solid',
        background: setBackgroundColor,
      }}
      onClick={handleClick}
    ></div>
  );
}
