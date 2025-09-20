import React, { useState, useEffect } from "react";
export default function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDone(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return <div>{done ? "Done!" : "Loading..."}</div>;
}
