#!/bin/sh
echo "Installing Backend !!! Without PiCamera !!!"
poetry --directory backend install
echo "Installing Frontend..."
npm install --prefix frontend
echo "Finished!"
