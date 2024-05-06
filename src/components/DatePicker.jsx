import React, { useState, useEffect } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
import { useDispatch } from "react-redux";
import { setDate } from "./datepickSlice";
import styles from "react-day-picker/dist/style.module.css";
const DatePicker = () => {
  const [selected, setSelected] = useState(new Date());
  const dispatch = useDispatch();

  const [nextday, setNextDay] = useState(selected);
  const [slot, setSlot] = useState("");

  const customStyles = {
    selected: {
      background: "green", // Change this to the desired background color
    },
  };

  useEffect(() => {
    getDate();
    dispatch(setDate(selected));
  }, [selected]);
  const getDate = async () => {
    setNextDay(new Date(selected.getTime() + 24 * 60 * 60 * 1000));
    const data = await fetch(
      `https://app.appointo.me/scripttag/mock_timeslots?start_date=${selected}&end_date=${nextday}`
    );

    const json = await data.json();

    if (json.length > 0 && json[0]?.slots) {
      setSlot(json[0]?.slots);
    } else {
      console.log("No slots available for the selected date range");
    }
  };
console.log(slot);
  return (
    <>
      <DayPicker
        styles={{
          head: { color: "green" },
        }}
        mode="single"
        selected={selected}
        onSelect={setSelected}
        customStyles={customStyles}
      />
    </>
  );
};

export default DatePicker;
