@echo off
title Fabula Portfolio Preview
cd /d "%~dp0"

echo Checking dependencies...
if not exist node_modules (
  echo Installing dependencies, this may take a minute...
  call npm install
)

echo Generating video index...
call npm run generate:videos

echo.
echo ======================================================
echo 📱 POUR VOIR SUR TON TELEPHONE :
echo Assure-toi que ton telephone est sur le meme reseau WiFi.
echo Entre cette adresse dans ton navigateur mobile :
echo http://172.20.10.4:5173
echo ======================================================
echo.

echo Starting local server...
start http://127.0.0.1:5173
call npm run dev:portfolio

pause
