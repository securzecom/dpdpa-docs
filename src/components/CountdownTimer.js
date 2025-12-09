import React, { useEffect, useState } from "react";
import styles from "./CountdownTimer.module.css";

// 13 May 2027, 00:00 IST
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

function TimeUnit({ label, value }) {
  const [isTicking, setIsTicking] = useState(false);

  useEffect(() => {
    // trigger smooth tick animation whenever the value changes
    setIsTicking(true);
    const t = setTimeout(() => setIsTicking(false), 200);
    return () => clearTimeout(t);
  }, [value]);

  return (
    <div className={styles.timeBox}>
      <div
        className={`${styles.timeValue} ${
          isTicking ? styles.tick : ""
        }`}
      >
        {value}
      </div>
      <div className={styles.timeUnit}>{label}</div>
    </div>
  );
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
        Time left to get{" "}
        <span className={styles.highlight}>DPDPA-ready</span>
      </p>
      <div className={styles.countdownRow}>
        <TimeUnit label="Days" value={timeLeft.days} />
        <TimeUnit label="Hours" value={timeLeft.hours} />
        <TimeUnit label="Minutes" value={timeLeft.minutes} />
        <TimeUnit label="Seconds" value={timeLeft.seconds} />
      </div>
    </div>
  );
}
