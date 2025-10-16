# Panadería Del Pilar Dashboard

This is a progress tracking dashboard application for Panadería Del Pilar, similar to the Blas app but with custom branding and colors.

## Features

- **Progress Tracking**: Visual progress bar with emoji indicators
- **Google Sheets Integration**: Connects to the same Google Sheets as the Blas app
- **Countdown Timer**: Shows remaining days and hours until month end
- **Local Storage**: Saves progress locally when Google Sheets is unavailable
- **Panadería Del Pilar Branding**: Custom colors (black, white, yellow) and logo

## Brand Colors

- **Primary Black**: #000000
- **Primary White**: #ffffff  
- **Accent Yellow**: #FFD700 (Gold)
- **Gray**: #666666
- **Light Gray**: #f8f9fa

## Google Sheets Configuration

The app connects to the same Google Sheets as the Blas app:
- **Sheet ID**: 1QqkNXEo7ap8FGlUx5YFLysr3LSF6nzLCpwZxTEF072I
- **Sheet Name**: Progress
- **API Key**: AIzaSyDt4D5cUMdCQG-LLAl7ZKanLt3MgQ3Alc8

## Structure

```
src/
├── app/
│   ├── components/
│   │   └── home/
│   │       ├── home.component.ts
│   │       ├── home.component.html
│   │       └── home.component.scss
│   ├── services/
│   │   └── google-sheets.service.ts
│   ├── app.ts
│   └── app.html
├── assets/
│   └── images/
│       └── delpilar_logo.svg
├── config/
│   └── google-sheets.config.ts
└── styles.scss
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open your browser and navigate to `http://localhost:4200`

## Key Differences from Blas App

- **Branding**: Panadería Del Pilar logo and color scheme
- **Storage Key**: Uses 'delpilar-progress' instead of 'blas-progress'
- **Message Prefix**: Shows "🥖 Del Pilar dice:" instead of "🐕 Blas dice:"
- **Colors**: Black, white, and gold color scheme instead of purple gradient
- **Logo**: Custom SVG logo matching the Panadería Del Pilar brand

## Development

The app is built with Angular 20 and uses:
- Standalone components
- SCSS for styling
- Google Sheets API for data synchronization
- Local storage for offline functionality