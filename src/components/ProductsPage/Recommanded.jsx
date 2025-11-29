import { useState } from "react";
import { FaCheck } from "react-icons/fa";

const Recommanded = () => {
  const [selected, setSelected] = useState("RECOMMENDED");

  const options = [
    "RECOMMENDED",
    "NEWEST FIRST",
    "POPULAR",
    "PRICE : HIGH TO LOW",
    "PRICE : LOW TO HIGH",
  ];

  return (
    <div
      style={{
        borderRadius: "2vh",
      }}
    >
      {options.map((item) => (
        <div
          key={item}
          onClick={() => setSelected(item)}
          style={{
            display: "flex",
            alignItems: "end",
            justifyContent: "flex-end",
            gap: "2vh",
            padding: "1.5vh ",
            cursor: "pointer",
            fontSize: item === selected ? "1.8vh" : "1.7vh",
            fontWeight: item === selected ? "700" : "500",
          }}
        >
          {item === selected && (
            <FaCheck size={14} style={{ color: "black" }} />
          )}

          <span
            style={{
              marginLeft: item === selected ? "0vh" : "3vh",
            }}
          >
            {item}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Recommanded;
