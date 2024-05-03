import React, { useState, useEffect } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

const DatePicker = () => {
  const [selected, setSelected] = useState(new Date());
  const [nextday, setNextDay] = useState(selected);
  const [slot, setSlot] = useState("");
  let footer = <p>Please pick a day.</p>;

  if (selected) {
    footer = <p>You picked {format(selected, "yyyy-MM-dd")}.</p>;
  }

  useEffect(() => {
    getDate();
  }, [selected]);
  const getDate = async () => {
    setNextDay(new Date(selected.getTime() + 24 * 60 * 60 * 1000));
    const data = await fetch(
      `https://app.appointo.me/scripttag/mock_timeslots?start_date=${selected}&end_date=${nextday}`
    );
    console.log(data);
    const json = await data.json();
    console.log(json);
    if (json.length > 0 && json[0]?.slots) {
      setSlot(json[0]?.slots);
      console.log(json[0]?.slots);
    } else {
      console.log("No slots available for the selected date range");
    }
  };

  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={footer}
    />
  );
};

export default DatePicker;
