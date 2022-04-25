import React, { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(newMode, replace = false) {
  
  if (replace){
        history[history.length - 1] = newMode;
        setHistory(history)
    } else {
      setHistory([... history, newMode])
    } 
    setMode(newMode)
  };
   
  function back() { 
    const History = history.length > 1 ? history.slice(0, -1) : history;
    setHistory(History);
    const lastMode = History[History.length - 1] 
    setMode(lastMode);
  }

  return { mode, transition, back };
}

