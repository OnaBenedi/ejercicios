import { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return <h2>The current hour is: {time.toLocaleTimeString()}</h2>;
}

export default Clock;
