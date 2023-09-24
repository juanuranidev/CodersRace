import React from "react";
import { useState, useEffect } from "react";

const useMillisecondCounter = () => {
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [milliseconds, setMilliseconds] = useState<number>(0);

  let interval: NodeJS.Timeout | null = null;

  useEffect(() => {
    if (isRunning) {
      interval = setInterval(() => {
        setMilliseconds((prevMilliseconds) => prevMilliseconds + 10);
      }, 10); // Actualiza el contador cada milisegundo (1 milisegundo = 1)
    } else if (interval) {
      clearInterval(interval);
      interval = null; // Limpia la variable interval cuando se detiene el contador
    }

    // Limpia el intervalo cuando el componente se desmonta
    return () => {
      if (interval) {
        clearInterval(interval);
        interval = null; // Limpia la variable interval cuando el componente se desmonta
      }
    };
  }, [isRunning]);

  const startCounter = () => {
    setIsRunning(true);
  };

  const stopCounter = () => {
    setIsRunning(false);
  };

  return {
    isRunning,
    stopCounter,
    startCounter,
    milliseconds,
  };
};

export default useMillisecondCounter;
