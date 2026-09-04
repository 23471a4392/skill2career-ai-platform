@echo off
setlocal
title Skill2Career Browser Opener

set PORT=5173
set APP_URL=http://localhost:%PORT%

echo [*] Opening Skill2Career at %APP_URL% ...

powershell -Command "$chromePaths = @('${env:ProgramFiles}\Google\Chrome\Application\chrome.exe', '${env:ProgramFiles(x86)}\Google\Chrome\Application\chrome.exe', '${env:LocalAppData}\Google\Chrome\Application\chrome.exe'); $launched = $false; foreach ($path in $chromePaths) { if (Test-Path $path) { Start-Process $path '%APP_URL%'; $launched = $true; break } }; if (-not $launched) { Start-Process '%APP_URL%' }"

echo [OK] Browser launched.
timeout /t 2 >nul
