import React from "react";
import power from "./icons/power.svg"
const buttonData = [
  {
    signal: "BRIGHTNESS_UP",
    bgColor: "white",
    icon: "b_up.svg",
    borderRadius: "10px 0px 0px 10px",
    marginBottom: "5px",
  },
  {
    signal: "BRIGHTNESS_DOWN",
    bgColor: "white",
    icon: "b_down.svg",
    borderRadius: "0px 10px 10px 0px",
    marginBottom: "5px",
    marginRight: "5px",
  },
  {
    signal: "PLAY",
    bgColor: "black",
    icon: "play.svg",
    borderRadius: "10px 0px 0px 10px",
    marginBottom: "5px",
    marginLeft: "5px",
  },
  {
    signal: "POWER",
    bgColor: "red",
    icon: `url(${power})`,
    borderRadius: "0px 10px 10px 0px",
    marginBottom: "5px",
  },
  {
    signal: "RED_0",
    bgColor: "red",
    icon: "r.svg",
    borderRadius: "10px 0px 0px 0px",
  },
  {
    signal: "GREEN_0",
    bgColor: "#00B245",
    icon: "g.svg",
    borderRadius: "0px 0px 0px 0px",
  },
  {
    signal: "BLUE_0",
    bgColor: "blue",
    icon: "b.svg",
    borderRadius: "0px 0px 0px 0px",
  },
  {
    signal: "WHITE_0",
    bgColor: "white",
    icon: "w.svg",
    borderRadius: "0px 10px 0px 0px",
  },
  {
    signal: "RED_1",
    bgColor: "#F46100",
    icon: "null",
    borderRadius: "0px 0px 0px 0px",
  },
  {
    signal: "GREEN_1",
    bgColor: "#7FD339",
    icon: "null",
    borderRadius: "0px 0px 0px 0px",
  },
  {
    signal: "BLUE_1",
    bgColor: "009BFF",
    icon: "null",
    borderRadius: "0px 0px 0px 0px",
  },
  {
    signal: "WHITE_1",
    bgColor: "#FC88FF",
    icon: "null",
    borderRadius: "0px 0px 0px 0px",
  },
  {
    signal: "RED_2",
    bgColor: "#FF3B48",
    icon: "null",
    borderRadius: "0px 0px 0px 0px",
  },
  {
    signal: "GREEN_2",
    bgColor: "darkgreen",
    icon: "null",
    borderRadius: "0px 0px 0px 0px",
  },
  {
    signal: "BLUE_2",
    bgColor: "#7B2AA5",
    icon: "null",
    borderRadius: "0px 0px 0px 0px",
  },
  {
    signal: "WHITE_2",
    bgColor: "#FC88FF",
    icon: "null",
    borderRadius: "0px 0px 0px 0px",
  },
  {
    signal: "RED_3",
    bgColor: "red",
    icon: "null",
    borderRadius: "0px 0px 0px 0px",
  },
  {
    signal: "GREEN_3",
    bgColor: "darkgreen",
    icon: "null",
    borderRadius: "0px 0px 0px 0px",
  },
  {
    signal: "BLUE_3",
    bgColor: "blue",
    icon: "null",
    borderRadius: "0px 0px 0px 0px",
  },
  {
    signal: "WHITE_3",
    bgColor: "#6EBBE5",
    icon: "null",
    borderRadius: "0px 0px 0px 0px",
  },
  {
    signal: "RED_4",
    bgColor: "red",
    icon: "null",
    borderRadius: "0px 0px 0px 10px",
    marginBottom: "5px",
  },
  {
    signal: "GREEN_4",
    bgColor: "darkgreen",
    icon: "null",
    borderRadius: "0px 0px 0px 0px",
    marginBottom: "5px",
  },
  {
    signal: "BLUE_4",
    bgColor: "blue",
    icon: "null",
    borderRadius: "0px 0px 0px 0px",
    marginBottom: "5px",
  },
  {
    signal: "WHITE_4",
    bgColor: "#6EBBE5",
    icon: "null",
    borderRadius: "0px 0px 10px 0px",
    marginBottom: "5px",
  },
  {
    signal: "RED_UP",
    bgColor: "white",
    icon: "null",
    borderRadius: "10px 0px 0px 0px",
  },
  {
    signal: "GREEN_UP",
    bgColor: "white",
    icon: "null",
    borderRadius: "0px 0px 0px 0px",
  },
  {
    signal: "BLUE_UP",
    bgColor: "white",
    icon: "null",
    borderRadius: "0px 10px 0px 0px",
    marginRight: "5px",
  },
  {
    signal: "QUICK",
    bgColor: "white",
    icon: "null",
    borderRadius: "10px 10px 0px 0px",
  },
  {
    signal: "RED_DOWN",
    bgColor: "white",
    icon: "null",
    borderRadius: "0px 0px 0px 0px",
  },
  {
    signal: "GREEN_DOWN",
    bgColor: "white",
    icon: "null",
    borderRadius: "0px 0px 0px 0px",
  },
  {
    signal: "BLUE_DOWN",
    bgColor: "white",
    icon: "null",
    borderRadius: "0px 0px 0px 0px",
    marginRight: "5px",
  },
  {
    signal: "SLOW",
    bgColor: "white",
    icon: "null",
    borderRadius: "0px 0px 10px 10px",
    marginBottom: "5px",
  },
  {
    signal: "DIY1",
    bgColor: "white",
    icon: "null",
    borderRadius: "0px 0px 0px 0px",
  },
  {
    signal: "DIY2",
    bgColor: "white",
    icon: "null",
    borderRadius: "0px 0px 0px 0px",
  },
  {
    signal: "DIY3",
    bgColor: "white",
    icon: "null",
    borderRadius: "0px 0px 0px 0px",
    marginRight: "5px",
  },
  {
    signal: "AUTO",
    bgColor: "white",
    icon: "null",
    borderRadius: "10px 10px 0px 0px",
  },
  {
    signal: "DIY4",
    bgColor: "white",
    icon: "null",
    borderRadius: "0px 0px 0px 10px",
    marginBottom: "5px",
  },
  {
    signal: "DIY5",
    bgColor: "white",
    icon: "null",
    borderRadius: "0px 0px 0px 0px",
    marginBottom: "5px",
  },
  {
    signal: "DIY6",
    bgColor: "white",
    icon: "null",
    borderRadius: "0px 0px 10px 0px",
    marginBottom: "5px",
    marginRight: "5px",
  },
  {
    signal: "FLASH",
    bgColor: "white",
    icon: "null",
    borderRadius: "0px 0px 0px 0px",
  },
  {
    signal: "JUMP3",
    bgColor: "white",
    icon: "null",
    borderRadius: "10px 0px 0px 10px",
  },
  {
    signal: "JUMP7",
    bgColor: "white",
    icon: "null",
    borderRadius: "0px 0px 0px 0px",
  },
  {
    signal: "FADE3",
    bgColor: "white",
    icon: "null",
    borderRadius: "0px 0px 0px 0px",
  },
  {
    signal: "FADE7",
    bgColor: "white",
    icon: "null",
    borderRadius: "0px 0px 10px 0px",
  },
  /*"BRIGHTNESS_DOWN",
    "PLAY",
    "POWER",
    "RED_0",
    "GREEN_0",
    "BLUE_0",
    "WHITE_0",
    "RED_1",
    "GREEN_1",
    "BLUE_1",
    "WHITE_1",
    "RED_2",
    "GREEN_2",
    "BLUE_2",
    "WHITE_2",
    "RED_3",
    "GREEN_3",
    "BLUE_3",
    "WHITE_3",
    "RED_4",
    "GREEN_4",
    "BLUE_4",
    "WHITE_4",
    "RED_UP",
    "GREEN_UP",
    "BLUE_UP",
    "QUICK",
    "RED_DOWN",
    "GREEN_DOWN",
    "BLUE_DOWN",
    "SLOW",
    "RED_DOWN",
    "GREEN_DOWN",
    "BLUE_DOWN",
    "SLOW",
    "DIY1",
    "DIY2",
    "DIY3",
    "AUTO",
    "DIY4",
    "DIY5",
    "DIY6",
    "FLASH",
    "JUMP3",
    "JUMP7",
    "FADE3",
    "FADE7", */
];

function LayoutButtons() {
  const sendRequest = (signal) => {
    fetch("http://192.168.0.24:8090/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        irSignal: signal,
      }),
    });
  };

  const handleClick = (signal) => {
    console.log(signal);
    sendRequest(signal);
  };
  return (
    <>
      {buttonData.map((button) => {
        return (
          <div
            style={{
              backgroundColor: "black",
              borderRadius: button.borderRadius,
              marginBottom: button.marginBottom,
              marginRight: button.marginRight,
              marginLeft: button.marginLeft,
            }}
          >
            <button
              type="button"
              style={{
                backgroundColor: button.bgColor,
                backgroundImage: button.icon
              }}
              className="remoteButton"
              onClick={() => handleClick(button.signal)}
            >
            </button>
          </div>
        );
      })}
    </>
  );
}

export default LayoutButtons;
