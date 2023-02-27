import { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      {/*  {`${time.toLocaleTimeString()}`} */}
      <p className="font-bold text-2xl text-center ">
        Time Now: {`${time.toLocaleTimeString()}`}
      </p>
    </div>
  );
};

export default Clock;
