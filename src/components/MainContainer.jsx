import React, { useState } from "react";
import "./maincontainer.css";
import DatePicker from "./DatePicker";
import { format } from "date-fns";
import { useSelector } from "react-redux";
import { ThreeDots } from "react-loader-spinner";
import { Link } from "react-router-dom";

const MainContainer = () => {
  // State to track the selected slot
  const [selectedSlot, setSelectedSlot] = useState(null);

  // Get the date, slots, and loading state from Redux
  const { newdate, slot, isLoading } = useSelector((state) => state.datepick);

  // Map the first 4 slots to button elements, or show a message if no slots are available
  const renderedSlots =
    slot && slot.length > 0 ? (
      slot.slice(0, 4).map((slot, index) => {
        const startTime = format(new Date(slot.start_time), "hh:mm a");
        const endTime = format(new Date(slot.end_time), "hh:mm a");
        const isSelected = selectedSlot === index;
        return (
          <button
            key={index}
            className={`button ${isSelected ? "selected" : ""}`}
            onClick={() => setSelectedSlot(index)}
          >
            {`${startTime} - ${endTime}`}
            {isSelected && (
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Eo_circle_green_checkmark.svg"
                alt=""
              />
            )}
          </button>
        );
      })
    ) : (
      <p>No slots available for this date.</p>
    );

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
            <h4 className="slottitle">
              {format(newdate, "EEEE, MMM d").toUpperCase()} - AVAILABLE SLOTS
            </h4>
            <div className={` ${isLoading ? "loading" : ""} `}>
              {isLoading ? (
                <ThreeDots
                  visible={true}
                  height="80"
                  width="80"
                  color="#4fa94d"
                  radius="9"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              ) : (
                <div className="rednerslot">{renderedSlots}</div>
              )}
            </div>
          </div>
        </section>
      </main>
      <div className="full-width-button">
        <span>POWERED BY APPONTIO</span>
        <button>
          <Link to="/schedule" style={{ textDecoration: 'none' }}>Next &gt;</Link>
        </button>
      </div>
    </>
  );
};

export default MainContainer;
