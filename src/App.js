import "./styles.css";
import { Box } from "./Box";
import { useState, useRef } from "react";

export default function App() {
  const [res, setRes] = useState([]);
  let timer = useRef(null);
  let arr = [
    [1, 1, 1],
    [1, 0, 0],
    [1, 1, 1],
  ];
  let count = arr.flat().filter((item) => item === 1).length;

  const handleSubmit = (val) => {
    if (res.length + 1 < count) {
      setRes((prev) => [...prev, val]);
    } else {
      setRes((prev) => [...prev, val]);
      let local = [...res, val];
      timer.current = setInterval(() => {
        let curr = local.shift();
        let doc = document.getElementById(curr);
        doc.classList.remove("blue");
        setRes(local);
        if (local.length === 0) {
          setRes([]);
          clearInterval(timer.current);
        }
      }, 1000);
    }
  };

  return (
    <div className="App">
      {arr.map((item, index) => {
        return (
          <div className="boxWrapper" key={index}>
            {item.map(
              (child, subIndex) =>
                child === 1 && (
                  <Box
                    key={`${index}-${subIndex}`}
                    id={`${index}-${subIndex}`}
                    onClick={handleSubmit.bind(this, `${index}-${subIndex}`)}
                    customClassName={
                      res.includes(`${index}-${subIndex}`) && "blue"
                    }
                  />
                ),
            )}
          </div>
        );
      })}
    </div>
  );
}
