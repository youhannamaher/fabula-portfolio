@echo off
title Fabula Portfolio - Publish to GitHub
cd /d "%~dp0"

echo ======================================================
echo PREPARATION DU PORTFOLIO...
echo ======================================================
echo.

echo 1. Mise a jour de l'index des videos...
call npm run generate:videos

echo.
echo 2. Ajout des modifications...
git add .

echo.
echo 3. Creation de la sauvegarde (Commit)...
git commit -m "Update portfolio %date% %time%"

echo.
echo 4. Envoi vers GitHub (Push)...
git push origin main

echo.
echo ======================================================
echo TERMINE ! Ton site sera a jour dans 1-2 minutes.
echo Adresse : https://youhannamaher.github.io/fabula-portfolio/
echo ======================================================
echo.
pause
