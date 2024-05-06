import React from "react";
import { useState } from "react";
import "./maincontainer.css";
import DatePicker from "./DatePicker";
import { format } from "date-fns";
import { useSelector } from "react-redux";
const MainContainer = () => {
  const [selected, setSelected] = useState("");
  const currentdate = useSelector((state) => state.datepick);
  console.log(format(currentdate, 'EEEE, MMM d').toUpperCase());
  return (
    <>
      <main className="main">
        <section className="wrapper">
          <h2 className="title">Test Service</h2>
          <div className="info">
            <span>Timezone: Asia/Calcutta</span>
          </div>
          <div className="calendar">
            <DatePicker />
          </div>
        </section>
        <section className="wrapperslot">
          <h3 className="slottitle">SELECT FROM VARIANTS</h3>
          <select className="select">
            <option value="15">15 min</option>
            <option value="30">30 min</option>
            <option value="45">45 min</option>
          </select>
          <div className="slots">
            <h4 className="slottitle"> {format(currentdate, 'EEEE, MMM d').toUpperCase()} - AVAILABLE SLOTS</h4>
            <button className="button">03:30 AM - 04:00 AM</button>
            <button className="button">04:00 AM - 04:30 AM</button>
            <button className="button">04:30 AM - 05:00 AM</button>
            <button className="button">05:00 AM - 05:30 AM</button>
          </div>
        </section>
      </main>
      <div className="full-width-button">
        <span>POWERED BY APPONTIO</span>
        <button>Next &gt;</button>
      </div>
    </>
  );
};

export default MainContainer;
