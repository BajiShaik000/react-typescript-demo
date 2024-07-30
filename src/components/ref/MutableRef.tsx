import { useState, useRef, useEffect } from "react";

export const MutableRef = () => {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef<number | null>(null);

  function stopTimer() {
    if (intervalRef.current) window.clearInterval(intervalRef.current);
  }

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setTimer(timer + 1);
    }, 1000);
    return () => {
      stopTimer();
    };
  }, [timer]);

  return (
    <div>
      <h1>Timer - {timer}</h1>
      <button onClick={() => stopTimer()}>stopTimer</button>
    </div>
  );
};
