#!/bin/sh
poetry --directory backend run python3 backend/main.py & poetry --directory backend run python3 backend/camera/camera_server.py & npm run --prefix frontend dev -- --host && fg
