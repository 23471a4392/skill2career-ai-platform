@echo off
setlocal enabledelayedexpansion
title Skill2Career Web Application Launcher

echo ======================================================================
echo          Skill2Career - AI Career Path ^& Learning Navigator          
echo ======================================================================
echo.

:: 1. Navigate to script directory
cd /d "%~dp0"
echo [*] Working Directory: %CD%

:: 2. Check Node.js
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not detected in your system PATH.
    echo Please install Node.js from https://nodejs.org/ (version 18 or newer recommended).
    echo.
    pause
    exit /b 1
)

for /f "tokens=*" %%v in ('node -v') do set NODE_VER=%%v
echo [OK] Node.js detected: !NODE_VER!

:: 3. Check node_modules
if not exist "node_modules\" (
    echo [*] Dependencies not found. Running "npm install"...
    call npm install
    if %errorlevel% neq 0 (
        echo [ERROR] Failed to install npm dependencies.
        pause
        exit /b 1
    )
) else (
    echo [OK] Dependencies verified in node_modules.
)

:: 4. Port configuration
set PORT=5173
set APP_URL=http://localhost:%PORT%

echo.
echo [*] Starting Vite Development Server on %APP_URL% ...
echo.

:: 5. Launch Browser in Background after short wait
start /b cmd /c "powershell -Command "Start-Sleep -Seconds 3; $chromePaths = @('${env:ProgramFiles}\Google\Chrome\Application\chrome.exe', '${env:ProgramFiles(x86)}\Google\Chrome\Application\chrome.exe', '${env:LocalAppData}\Google\Chrome\Application\chrome.exe'); $launched = $false; foreach ($path in $chromePaths) { if (Test-Path $path) { Start-Process $path '%APP_URL%'; $launched = $true; break } }; if (-not $launched) { Start-Process '%APP_URL%' }""

:: 6. Run Vite server
call npm run dev -- --port %PORT%

if %errorlevel% neq 0 (
    echo [ERROR] The server encountered an issue.
    pause
)
