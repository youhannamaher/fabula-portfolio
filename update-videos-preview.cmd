@echo off
title Update Video Gallery
cd /d "%~dp0"

echo Regenerating video gallery index...
call npm run generate:videos

echo.
echo Gallery updated! You can now refresh your browser.
echo If the server isn't running, use open-portfolio-preview.cmd
echo.
pause
