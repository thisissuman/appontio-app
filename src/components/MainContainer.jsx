import React from "react";
import { useState } from "react";
import "./maincontainer.css";
import DatePicker from "./DatePicker";

const MainContainer = () => {
  const [selected, setSelected] = useState(new Date());
  return (
    <main class="main">
      <section class="wrapper">
        <h2 class="title">Test Service</h2>
        <div class="info">
          <span >Timezone: Asia/Calcutta</span>
        </div>
        <div class="calendar">
          <DatePicker />
        </div>
      </section>
      <section class="wrapperslot">
        <h3 class="title">SELECT FROM VARIANTS</h3>
        <select class="select">
          <option value="15">15 min</option>
          <option value="30">30 min</option>
          <option value="45">45 min</option>
        </select>
        <div class="slots">
          <h4 class="subtitle">THURSDAY, DEC 2 - AVAILABLE SLOTS</h4>
          <button class="button">03:30 AM - 04:00 AM</button>
          <button class="button">04:00 AM - 04:30 AM</button>
          <button class="button">04:30 AM - 05:00 AM</button>
          <button class="button">05:00 AM - 05:30 AM</button>
        </div>
      </section>
    </main>
  );
};

export default MainContainer;
