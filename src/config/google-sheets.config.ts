// Google Sheets Configuration
// Environment variables are used for security

export const GOOGLE_SHEETS_CONFIG = {
  // Get this from Google Cloud Console - Set as environment variable
  API_KEY: (globalThis as any)['NG_APP_GOOGLE_API_KEY'] || '',
  
  // Get this from your Google Sheets URL - Set as environment variable
  // Example: https://docs.google.com/spreadsheets/d/1ABC123.../edit
  // The SHEET_ID is: 1ABC123...
  SHEET_ID: (globalThis as any)['NG_APP_GOOGLE_SHEET_ID'] || '',
  
  // Name of the sheet tab (worksheet) in your Google Sheets
  // If you haven't renamed the sheet tab, it's usually 'Sheet1' by default
  SHEET_NAME: 'del-pilar',
  
  // Column structure in your Google Sheets:
  // A: Month (string) - e.g., "January 2024"
  // B: Progress (number) - e.g., 75
  
  // Example Google Sheets structure:
  // | Month | Progress |
  // | January 2024 | 75 |
  // | February 2024 | 50 |
  // | March 2024 | 100 |
};