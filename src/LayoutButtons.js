import React from "react";
import MySvg from "./icons/index.js"

const buttonSvg = MySvg;
const buttonData = [
  {
    signal: "BRIGHTNESS_UP",
    bgColor: "white",
    icon: `url(${buttonSvg.B_up})`,
    borderRadius: "10px 0px 0px 10px",
    marginBottom: "5px",
  },
  {
    signal: "BRIGHTNESS_DOWN",
    bgColor: "white",
    icon: `url(${buttonSvg.B_down})`,
    borderRadius: "0px 10px 10px 0px",
    marginBottom: "5px",
    marginRight: "5px",
  },
  {
    signal: "PLAY",
    bgColor: "black",
    icon: `url(${buttonSvg.Play})`,
    borderRadius: "10px 0px 0px 10px",
    marginBottom: "5px",
    marginLeft: "5px",
  },
  {
    signal: "POWER",
    bgColor: "red",
    icon: `url(${buttonSvg.Power})`,
    borderRadius: "0px 10px 10px 0px",
    marginBottom: "5px",
  },
  {
    signal: "RED_0",
    bgColor: "red",
    icon: `url(${buttonSvg.R})`,
    borderRadius: "10px 0px 0px 0px",
    changeBg: true
  },
  {
    signal: "GREEN_0",
    bgColor: "#00B245",
    icon: `url(${buttonSvg.G})`,
    borderRadius: "0px 0px 0px 0px",
    changeBg: true
  },
  {
    signal: "BLUE_0",
    bgColor: "blue",
    icon: `url(${buttonSvg.B})`,
    borderRadius: "0px 0px 0px 0px",
    changeBg: true
  },
  {
    signal: "WHITE_0",
    bgColor: "white",
    icon: `url(${buttonSvg.W})`,
    borderRadius: "0px 10px 0px 0px",
    changeBg: true
  },
  {
    signal: "RED_1",
    bgColor: "#F46100",
    icon: "null",
    borderRadius: "0px 0px 0px 0px",
    changeBg: true
  },
  {
    signal: "GREEN_1",
    bgColor: "#7FD339",
    icon: "null",
    borderRadius: "0px 0px 0px 0px",
    changeBg: true
  },
  {
    signal: "BLUE_1",
    bgColor: "009BFF",
    icon: "null",
    borderRadius: "0px 0px 0px 0px",
    changeBg: true
  },
  {
    signal: "WHITE_1",
    bgColor: "#FC88FF",
    icon: "null",
    borderRadius: "0px 0px 0px 0px",
    changeBg: true
  },
  {
    signal: "RED_2",
    bgColor: "#FF3B48",
    icon: "null",
    borderRadius: "0px 0px 0px 0px",
    changeBg: true
  },
  {
    signal: "GREEN_2",
    bgColor: "darkgreen",
    icon: "null",
    borderRadius: "0px 0px 0px 0px",
    changeBg: true
  },
  {
    signal: "BLUE_2",
    bgColor: "#7B2AA5",
    icon: "null",
    borderRadius: "0px 0px 0px 0px",
    changeBg: true
  },
  {
    signal: "WHITE_2",
    bgColor: "#FC88FF",
    icon: "null",
    borderRadius: "0px 0px 0px 0px",
    changeBg: true
  },
  {
    signal: "RED_3",
    bgColor: "red",
    icon: "null",
    borderRadius: "0px 0px 0px 0px",
    changeBg: true
  },
  {
    signal: "GREEN_3",
    bgColor: "darkgreen",
    icon: "null",
    borderRadius: "0px 0px 0px 0px",
    changeBg: true
  },
  {
    signal: "BLUE_3",
    bgColor: "blue",
    icon: "null",
    borderRadius: "0px 0px 0px 0px",
    changeBg: true
  },
  {
    signal: "WHITE_3",
    bgColor: "#6EBBE5",
    icon: "null",
    borderRadius: "0px 0px 0px 0px",
    changeBg: true
  },
  {
    signal: "RED_4",
    bgColor: "red",
    icon: "null",
    borderRadius: "0px 0px 0px 10px",
    marginBottom: "5px",
    changeBg: true
  },
  {
    signal: "GREEN_4",
    bgColor: "darkgreen",
    icon: "null",
    borderRadius: "0px 0px 0px 0px",
    marginBottom: "5px",
    changeBg: true
  },
  {
    signal: "BLUE_4",
    bgColor: "blue",
    icon: "null",
    borderRadius: "0px 0px 0px 0px",
    marginBottom: "5px",
    changeBg: true
  },
  {
    signal: "WHITE_4",
    bgColor: "#6EBBE5",
    icon: "null",
    borderRadius: "0px 0px 10px 0px",
    marginBottom: "5px",
    changeBg: true
  },
  {
    signal: "RED_UP",
    bgColor: "white",
    icon: `url(${buttonSvg.Red_up})`,
    borderRadius: "10px 0px 0px 0px",
  },
  {
    signal: "GREEN_UP",
    bgColor: "white",
    icon: `url(${buttonSvg.Green_up})`,
    borderRadius: "0px 0px 0px 0px",
  },
  {
    signal: "BLUE_UP",
    bgColor: "white",
    icon: `url(${buttonSvg.Blue_up})`,
    borderRadius: "0px 10px 0px 0px",
    marginRight: "5px",
  },
  {
    signal: "QUICK",
    bgColor: "white",
    icon: "null",
    text: true,
    borderRadius: "10px 10px 0px 0px",
  },
  {
    signal: "RED_DOWN",
    bgColor: "white",
    icon: `url(${buttonSvg.Red_down})`,
    borderRadius: "0px 0px 0px 0px",
  },
  {
    signal: "GREEN_DOWN",
    bgColor: "white",
    icon: `url(${buttonSvg.Green_down})`,
    borderRadius: "0px 0px 0px 0px",
  },
  {
    signal: "BLUE_DOWN",
    bgColor: "white",
    icon: `url(${buttonSvg.Blue_down})`,
    borderRadius: "0px 0px 0px 0px",
    marginRight: "5px",
  },
  {
    signal: "SLOW",
    bgColor: "white",
    text: true,
    borderRadius: "0px 0px 10px 10px",
    marginBottom: "5px",
  },
  {
    signal: "DIY1",
    bgColor: "white",
    icon: "null",
    text: true,
    borderRadius: "0px 0px 0px 0px",
  },
  {
    signal: "DIY2",
    bgColor: "white",
    icon: "null",
    text: true,
    borderRadius: "0px 0px 0px 0px",
  },
  {
    signal: "DIY3",
    bgColor: "white",
    icon: "null",
    text: true,
    borderRadius: "0px 0px 0px 0px",
    marginRight: "5px",
  },
  {
    signal: "AUTO",
    bgColor: "white",
    icon: "null",
    text: true,
    borderRadius: "10px 10px 0px 0px",
  },
  {
    signal: "DIY4",
    bgColor: "white",
    icon: "null",
    text: true,
    borderRadius: "0px 0px 0px 10px",
    marginBottom: "5px",
  },
  {
    signal: "DIY5",
    bgColor: "white",
    icon: "null",
    text: true,
    borderRadius: "0px 0px 0px 0px",
    marginBottom: "5px",
  },
  {
    signal: "DIY6",
    bgColor: "white",
    icon: "null",
    text: true,
    borderRadius: "0px 0px 10px 0px",
    marginBottom: "5px",
    marginRight: "5px",
  },
  {
    signal: "FLASH",
    bgColor: "white",
    icon: "null",
    text: true,
    borderRadius: "0px 0px 0px 0px",
  },
  {
    signal: "JUMP3",
    bgColor: "white",
    icon: "null",
    text: true,
    borderRadius: "10px 0px 0px 10px",
  },
  {
    signal: "JUMP7",
    bgColor: "white",
    icon: "null",
    text: true,
    borderRadius: "0px 0px 0px 0px",
  },
  {
    signal: "FADE3",
    bgColor: "white",
    icon: "null",
    text: true,
    borderRadius: "0px 0px 0px 0px",
  },
  {
    signal: "FADE7",
    bgColor: "white",
    icon: "null",
    text: true,
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
            key={button.signal}
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
              { button.text && button.signal }
            </button>
          </div>
        );
      })}
    </>
  );
}

export default LayoutButtons;
