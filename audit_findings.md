# Simpmore Weekly Audit Findings

## 1. Repository Info
- **Repo**: https://github.com/cass-ale/simpcxty (cloned as "simpmore")
- **Live site**: https://simpmore.netlify.app
- **Framework**: React (CRA / react-scripts 5.0.1), JavaScript (no TypeScript)
- **Date**: 2025-04-25

## 2. TypeScript Check
- **Result**: N/A — project uses plain JavaScript (.js files), no tsconfig.json present
- No .ts or .tsx files found in the project

## 3. Production Build
- **Result**: PASS — Compiled successfully with no errors or warnings
- Output: build/static/js/main.c159b757.js (201.43 kB gzip)
- Output: build/static/css/main.2012eda9.css (3.84 kB gzip)

## 4. Peer Dependency Warnings
- @types/react-dom 18.3.7 expects @types/react@^18.0.0 but found 19.2.14
- react-remove-scroll 2.5.5 expects @types/react@"^16.8.0 || ^17.0.0 || ^18.0.0" but found 19.2.14
