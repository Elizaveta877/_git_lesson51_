import React, { useState, useEffect } from "react";
import { useIdleTimer } from "react-idle-timer";

const IdleTimer = () => {
  const [remaining, setRemaining] = useState(5);
  const [isIdle, setIsIdle] = useState(false);

  
  const handleOnIdle = () => {
    setIsIdle(true);
    console.log("Користувач неактивний");
  };

  const handleOnActive = () => {
    setIsIdle(false);
  };

  const { getRemainingTime, reset } = useIdleTimer({
    timeout: 7000,
    onIdle: handleOnIdle,
    onActive: handleOnActive,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const timeInMs = getRemainingTime();
    
      const seconds = Math.max(0, Math.ceil(timeInMs / 1000));
      setRemaining(seconds);
    }, 100);

    return () => clearInterval(interval);
  }, [getRemainingTime]);

  return (
    <div style={{ 
      border: '2px solid white', 
      padding: '20px', 
      margin: '20px', 
      borderRadius: '10px',
      backgroundColor: isIdle ? '#4a0000' : '#004a00',
      color: 'white',
      textAlign: 'center'
    }}>
      <h2>
        {isIdle ? "Таймер: ЧАС ВИЙШОВ" : "Таймер активності працює"}
      </h2>
      
      <div style={{ fontSize: '48px', color: 'yellow', margin: '20px 0' }}>
        {isIdle ? "0" : remaining} сек.
      </div>

      <p>Статус: {isIdle ? "Ви неактивні" : "Ви рухаєте мишкою"}</p>
 
    </div>
  );
};

export default IdleTimer;