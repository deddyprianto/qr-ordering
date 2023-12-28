import { useEffect, useRef } from "react";

export const useTimeOut = (callback, delay) => {
  const saveCallback = useRef(callback);

  // Remember the latest callback if it changes.
  useEffect(() => {
    saveCallback.current = callback;
  }, [callback]);

  //Set up timeout
  useEffect(() => {
    // Don't schedule if no delay is specified
    if (delay === null) return;

    const id = setTimeout(() => saveCallback.current(), delay);

    return () => clearTimeout(id);
  }, [delay]);
};
