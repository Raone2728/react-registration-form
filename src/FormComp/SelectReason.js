import React, { useState } from "react";
import MultiSelect from "react-multi-select-component";
import Form from "./Form";

function SelectReason() {
  const options = [
    { label: "For Admission", value: "School webiste" },
    {
      label: "For Teaching( job related )",
      value: "Admission"
    },

    {
      label: "For Queries",
      value: "For Queries"
    },
    { label: "Others", value: "others" }
  ];

  const [selected, setSelected] = useState([]);
  const [disabled, setdisabled] = useState(false);
  return (
    <div className="form__row">
      <span>Please Select Your Reason for Registration:</span>
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy={"Select Your Reason for Registration"}
        className={"selectAll"}
      />
    </div>
  );
}

export default SelectReason;
