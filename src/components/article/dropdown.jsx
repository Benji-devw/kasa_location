import React, { useState } from "react";

const Dropdown = ({ title, datas }) => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <>
      <div
        className="article__details__topBar"
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
      {open && 
      <div className={`article__details__content ${open ? "open" : null}`}>
        <div className={`article__details__item`}>
          {Array.isArray(datas) ? 
            datas.map((data, index) => ( <p key={index}>{data}</p> ))
          : 
            <p>{datas}</p>
          }
            </div>
      </div>
    }
      
    </>
  );
};

export default Dropdown;
