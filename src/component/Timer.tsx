"use client"
import { useEffect, useState } from 'react';

const Timer = ({ initialMinutes , onTimesUp }:any) => {
  const [time, setTime] = useState(initialMinutes * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    if (time <= 0) {
      clearInterval(timer);
      onTimesUp();
    }

    return () => clearInterval(timer);
  }, [onTimesUp, time]);

  const formatTime = (time: number) => {
    // console.log(time)
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div id="timer">
      {formatTime(time)}
    </div>
  );
};

export default Timer;
