import uvicorn
import io
import logging
import os
import asyncio
from threading import Condition
from fastapi import FastAPI, Request, Response
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import HTMLResponse, StreamingResponse

from sensors import system_sensors

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


@app.get("/test")
async def root():
    return {"message": "Hello World"}


app.data = [
    {"name": "Akku", "value": "100 %"},
    {"name": "Verbindung", "value": "100 %"},
    {"name": "Temperatur", "value": "21 °C"},
]


@app.get("/datafeed")
async def datafeed():
    temp = system_sensors.getCPUTemp()
    if temp:
        temp_str = "{:.1f} °C".format(temp)
    else:
        temp_str = '-- °C'

    signal = system_sensors.getSignalStrength()
    if signal:
        signal_str = "{:.1f} %".format(signal*100)
    else:
        signal_str = '-- %'

    app.data[0].__setitem__("value", "100" + " %")
    app.data[1].__setitem__("value", signal_str)
    app.data[2].__setitem__("value", temp_str)

    return {
        "datalist": app.data
    }


if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
