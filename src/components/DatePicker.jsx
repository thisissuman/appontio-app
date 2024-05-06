import React, { useState, useEffect } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useDispatch } from "react-redux";
import { setDate, setSlots , setIsLoading} from "./datepickSlice";

const DatePicker = () => {
  const [selected, setSelected] = useState(new Date());
  const [nextday, setNextDay] = useState(selected);

  const dispatch = useDispatch();
  

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
