import { useEffect, useState } from "react";

interface CountdownTimerProps {
  initialSeconds: number;
  onComplete: () => void;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  initialSeconds,
  onComplete,
}) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    if (seconds === 0) {
      onComplete();
      return;
    }

    const timer = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds, onComplete]);

  return (
    <div className="text-gray-500">{`Resend OTP in: ${seconds} seconds`}</div>
  );
};

export default CountdownTimer;
