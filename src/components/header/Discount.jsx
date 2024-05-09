import React, { Component } from "react";
import styled from "styled-components";

class Countdown extends Component {
  state = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  componentDidMount() {
    let endDate = localStorage.getItem("endDate");
    if (!endDate) {
      endDate = new Date();
      endDate.setDate(endDate.getDate() + 2);
      localStorage.setItem("endDate", endDate);
    }

    this.interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(endDate).getTime() - now;

      if (distance <= 0) {
        clearInterval(this.interval);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      this.setState({ days, hours, minutes, seconds });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { days, hours, minutes, seconds } = this.state;

    return (
      <div>
        <Text>
          {days} дней {hours}:{minutes}:{seconds}
        </Text>
      </div>
    );
  }
}

const Text = styled("p")`
  font-size: 35px;
  font-weight: 800;
  color: white;
  margin: 0;
  @media (max-width: 480px) {
    font-size: 15px;
    padding-right: 0rem;
  }
`;

export default Countdown;
