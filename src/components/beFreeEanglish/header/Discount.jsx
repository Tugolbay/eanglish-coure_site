import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Countdown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let endDate = localStorage.getItem("endDate");
    if (!endDate) {
      endDate = new Date();
      endDate.setDate(endDate.getDate() + 2);
      localStorage.setItem("endDate", endDate);
    }

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(endDate).getTime() - now;

      if (distance <= 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Text>
        <div>
          <Desc>{days}</Desc>
          <Day>days</Day>
        </div>

        <div>
          <Desc>{hours}</Desc>
          <Day>Hours</Day>
        </div>

        <div>
          <Desc>{minutes}</Desc>
          <Day>Minutes</Day>
        </div>

        <div>
          <Desc>{seconds}</Desc>
          <Day>Seconds</Day>
        </div>
      </Text>
    </div>
  );
};

const Text = styled("div")`
  display: flex;
  gap: 5rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 3rem;
  }

  div:not(:first-child) {
    border-left: 1px solid #fff;
  }

  @media (max-width: 700px) {
    gap: 1rem;
  }

  @media (max-width: 420px) {
    div {
      padding-left: 2rem;
    }
  }
`;

const Desc = styled("p")`
  color: white;
  font-size: 60px;
  font-weight: 600;
  margin: 0;
  font-family: "TildaSans", Arial, sans-serif;

  @media (max-width: 490px) {
    font-size: 40px;
  }

  @media (max-width: 420px) {
    font-size: 30px;
  }
`;

const Day = styled("p")`
  color: white;
  font-size: 12px;
  line-height: 1.55;
  margin: 0;
  font-family: "TildaSans", Arial, sans-serif;
`;

export default Countdown;
