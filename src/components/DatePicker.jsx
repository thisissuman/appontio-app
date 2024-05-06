import React, { useState, useEffect } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
import { useDispatch } from "react-redux";
import { setDate, setSlots , setIsLoading} from "./datepickSlice";
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
    dispatch(setIsLoading(true)); 
    setNextDay(new Date(selected.getTime() + 24 * 60 * 60 * 1000));
    const data = await fetch(
      `https://app.appointo.me/scripttag/mock_timeslots?start_date=${selected}&end_date=${nextday}`
    );

    const json = await data.json();

    setSlot(json[0]?.slots);
    dispatch(setSlots(json[0]?.slots));
    dispatch(setIsLoading(false)); 
  };

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
