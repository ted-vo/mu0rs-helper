import React, { useEffect, useState } from 'react';
import styles from './App.module.css';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseover', onMouseOver);
      document.addEventListener('mouseout', onMouseOut);
    };

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
    };

    const onMouseMove = (e: any) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    const onMouseOver = (e: any) => {
      console.log("onMouseOver: ", e)
      if (e.target.tagName === 'A' || e.target.classList.contains('hover-target')) {
        setIsHovered(true);
      }
    };
    const onMouseOut = (e: any) => {
      if (e.target.tagName === 'A' || e.target.classList.contains('hover-target')) {
        setIsHovered(false);
      }
    };

    addEventListeners();
    return () => removeEventListeners();
  }, []);

  return (
    <div
      className={styles.customCursor}
      style={{ left: `${position.x}px`, top: `${position.y}px`, backgroundImage: `url(${isHovered ? "cursor-get.png" : "cursor.png"})` }}
    />
  );
};

export { CustomCursor };
