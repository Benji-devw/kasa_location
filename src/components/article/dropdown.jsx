import "../../styles/Dropdown.scss";
import React, { useState } from "react";

const Dropdown = ({ title, datas }) => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <div className="dropdown">
      <div
        className="dropdown__topBar"
        tabIndex={0}
        role="button"
        onClick={toggle}
        onKeyDown={(event) => {
          event.key === "Enter" && toggle();
        }}
      >
        <h4>{title}</h4>
        <img
          src="/Arrow.png"
          alt="arrow"
          style={{ transform: open ? "rotate(0deg)" : "rotate(180deg)" }}
        />
      </div>

      <div className={`dropdown__content ${open ? "open" : ""}`}>
        <div className={`dropdown__item`}>
          {Array.isArray(datas) ? (
            datas.map((data, index) => <p key={index}>{data}</p>)
          ) : (
            <p>{datas}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
