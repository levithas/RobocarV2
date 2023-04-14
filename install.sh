#!/bin/sh
echo "Installing Backend..."
poetry --directory backend install
echo "Installing Frontend..."
npm install --prefix frontend
echo "Finished!"
