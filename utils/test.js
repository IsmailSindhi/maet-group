import { google } from 'googleapis';
import { NextApiRequest, NextApiResponse } from 'next';

// Replace the path with the path to your service account JSON key file
const key = require('./affable-fabric-367022-6b33b43e0cb8.json');

async function authorize() {
    const jwtClient = new google.auth.JWT(
      key.client_email,
      null,
      key.private_key,
      ['https://www.googleapis.com/auth/spreadsheets']
    );
  
    await jwtClient.authorize();
    return jwtClient;
  }


  async function writeToSheet(range: string, values: any[][]) {
    const sheets = google.sheets({ version: 'v4', auth: await authorize() });
  
    const request = {
      spreadsheetId: '1Oi3AU9SujMfQ0sR1WRbIHPlM4fXU9woXbWQPFR_B6UQ', // Replace with the ID of your Google Spreadsheet
      range,
      valueInputOption: 'USER_ENTERED',
      resource: {
        values,
      },
    };
  
    try {
      const response = await sheets.spreadsheets.values.update(request);
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  }

const range = 'Sheet1!A1:B2'; // Replace with the range you want to write to
const values = [
  ['John', 'Doe'],
  ['Jane', 'Doe'],
];

await writeToSheet(range, values);
console.log('done writing');