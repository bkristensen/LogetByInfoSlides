@echo off

SET mypath=%~dp0

cd "C:\Program Files\Google\Chrome\Application"

chrome.exe --new-tab-page-1 --start-fullscreen --app=file:///%mypath:~0,-1%/infoslide.html

