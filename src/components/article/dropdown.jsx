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
      >
        <h4>{title}</h4>
        <img
          src="/Arrow.png"
          alt="arrow"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </div>
      {open && (
        <div className={`dropdown__content `}>
          <div className={`dropdown__item ${open ? "open" : "close"}`}>
            {Array.isArray(datas) ? (
              datas.map((data, index) => <p key={index}>{data}</p>)
            ) : (
              <p>{datas}</p>
            )}
          </div>
        </div>
     )}
    </div>
  );
};

export default Dropdown;
