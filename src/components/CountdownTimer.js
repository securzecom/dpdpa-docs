import React, { useEffect, useState } from "react";
import styles from "./CountdownTimer.module.css";


const TARGET_DATE = new Date("2027-05-13T00:00:00+05:30").getTime();


function getTimeLeft() {
  const now = new Date().getTime();
  const distance = TARGET_DATE - now;

  if (distance <= 0) {
    return {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
      isOver: true,
    };
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const pad = (n) => String(n).padStart(2, "0");

  return {
    days: pad(days),
    hours: pad(hours),
    minutes: pad(minutes),
    seconds: pad(seconds),
    isOver: false,
  };
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.countdownWrapper}>
      <p className={styles.countdownLabel}>
        Time left to get <span className={styles.highlight}>DPDPA-ready</span>
      </p>
      <div className={styles.countdownRow}>
        <div className={styles.timeBox}>
          <span className={styles.timeValue}>{timeLeft.days}</span>
          <span className={styles.timeUnit}>Days</span>
        </div>
        <div className={styles.timeBox}>
          <span className={styles.timeValue}>{timeLeft.hours}</span>
          <span className={styles.timeUnit}>Hours</span>
        </div>
        <div className={styles.timeBox}>
          <span className={styles.timeValue}>{timeLeft.minutes}</span>
          <span className={styles.timeUnit}>Minutes</span>
        </div>
        <div className={styles.timeBox}>
          <span className={styles.timeValue}>{timeLeft.seconds}</span>
          <span className={styles.timeUnit}>Seconds</span>
        </div>
      </div>
    </div>
  );
}
