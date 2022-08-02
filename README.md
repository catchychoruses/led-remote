## LED Remote React WebApp

![remote](https://user-images.githubusercontent.com/72499066/179507815-e7de1982-84ec-4d29-a241-49244c19ad8e.png)

 A simple app that mimics a 44 key IR remote that came with my SMD5050 Led Strip.
 Clicking a button sends a POST request with the corresponding IR signal value to a local server (Raspberry Pi with Flask) which then commands the GPIO IR transmitter.
 
 The IR Transmitter setup can be found [here](https://www.raspberry-pi-geek.com/Archive/2015/10/Raspberry-Pi-IR-remote).
