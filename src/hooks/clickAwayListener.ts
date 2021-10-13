import { useEffect } from "react";

const clickAwayListener = (ref: any, callback: () => void) => {
  useEffect(() => {
    const handleClickAway = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickAway);

    return () => {
      document.removeEventListener("mousedown", handleClickAway);
    };
  }, [ref]);
};

export default clickAwayListener;
