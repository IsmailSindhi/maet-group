import { NextApiRequest, NextApiResponse } from "next";
import { google } from 'googleapis';

type SheetForm = {
    name: string,
    fathername: string,
    formattedDateTime: string
}



export default async function handler(req: NextApiRequest, res: NextApiResponse){
    if (req.method !== "POST") {
        return res.status(405).send({ message: 'Only Post requests are allowed'})
    }
    const body = req.body as SheetForm
    try{
        // prepare auth
        const auth = new google.auth.GoogleAuth({credentials: { client_email: "spread-sheet@affable-fabric-367022.iam.gserviceaccount.com", 
        private_key:"-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDl8KYHze6ZZx/i\nS9JKcEldjfwgAx7QWPJoKut84PQgz3rKszuauZ3kkPqlIYOOg7KeE1XOQQvRm3rj\naK9dBFmbn8xdf0R8VEBoFmvTGP4WwbBwgucuOCY4kdES2MtCTmK7sWMpFatJ9Nyi\nkx8Rv/d/vrE3bGGDTABQNNmkUkLnZRl4ekPBhXhw6LX1R1heXJT4g3im/as30XlT\nnle6qchOUPe1k8hjV1qhcVpql6T/WeQH5dMgRYmRazC7ba1BwMTB7nFP3jR8UYhQ\ntqHjkqJqQBisX3c8eYdzIJtq5tXs9srp4xTBEpelW10kDOwRk+DeAkwuZEqjgwnw\n9Eb3XI5nAgMBAAECggEAavo/nJDsKZWnaVbCQxyjnXGR8+jPvLotKVaSkdps6hjt\ndYHWwMEL2wuyeQIzHSpbfxzaxmdP0til30hUkg+UiwlZAMTVvYxLHMIVrzRI/phl\neKsGWGQKMDZzEXQoeLRUTiOU0UgCFZnkzoRpJ45q3RWAiJsVcQr6eFZmTYNyGgn3\nAPp0OFJxgdENdSXJoWsugxa+Lt2lA7DoYTHIRVZP0sBfIyX0/yC3arT9SL1Qp/ez\njaly5DLMHMgWgXMK62d2ZmViHk/CsuSKB3jupsn8SEdn0capKN5yMbaZTChDUFgR\nzxBeUcCP185nwaQRYLZag9JeHvvH4nFAyusrfAJT1QKBgQD0Q3BZ0EAHDnDY3LCV\nsBuTJwVfXyiB/67tDTFtNOtD5PvfyunBfoRKUrLSX2RsxILW8wmlOEsBeN/JUcJv\nlOjFSXB/8ozJqntWa09MwcRARGJj6EOId+ThBXDcK7L1KJMnHQX+erowGdZs+v7G\nZqz6FZqS1NngqRTvcIv/FCkT6wKBgQDw/QZYBmpVGa+9xu5VTbJXhNFQYg0BEy0Y\n1Sg2IdODsWxrKdTEDmqwD14OfOchmZ/UfkKNUEO1hJRCZxL5rh3iWI8zaAHaGHVI\nuH9mGCy82SqeDIrFA5is7Pj01jaw4AjCdzn+nAcxW6JtwsR/K+FYeO3X11+LePHn\nIhC7UspcdQKBgQCge1Zri8klWbWGpahXEHdtfOuot2pzzrrtAAgDSgtwdheN91ER\nUcA03JSkZwwh8hJMiy1BIfUVqIbPTCpFCT7Nr+x8A63AKYQTSTm2onAAEW3bWhRU\nqwDzXpHB9ewD6n6T6huwEI4XYEJjI50UWQ042czOv43ObwhUMEuqcWJztQKBgQCJ\nOSsRmKWXy8aco9g2zsVMvJ6LzSlmgUrepxH8sQpGJRN9ehZjhWoO0tFWIp1iLp4q\nW7L90MSdad8aaKMPdawipRb1yLW1QNQYEqbItd9Tsb1ove+O+9tGLLIeiJQf55JV\nWZq2dpZJ7snxAkTtvUjWHhYhH8ySGM52NJmecSg1uQKBgBNnhw3xBRrWga1Oywis\nnN3dhnmVM5OJlPRPt1cQH/qsDB5HJR+GAb9f4V6H0V8iF6jiISBb5IrpXg9u5fdp\n7nc2BSRgvI/QhKjKHNiLhV2wh58VIwVBDjEndN/3bmXwhFHjGDmrwcYmKvquA/h7\nsuWmRB+aYKCh31pCzFGxigg9\n-----END PRIVATE KEY-----\n"},
        scopes: ['https://www.googleapis.com/auth/spreadsheets']})
        const currentDate = new Date();
        const formattedDateTime = currentDate.toLocaleString();
        console.log(formattedDateTime);
        const sheets = google.sheets({auth,version: 'v4'})
        const respose = await sheets.spreadsheets.values.append({spreadsheetId: "1Oi3AU9SujMfQ0sR1WRbIHPlM4fXU9woXbWQPFR_B6UQ", range: 'A1:C1', valueInputOption: 'USER_ENTERED', requestBody:{values:[[body.name, body.fathername, body.formattedDateTime ]]}} );
        console.log("done")
        return res.status(200).json({data: respose.data})
    }catch(err){
        console.log(err);
        return res.status(500);
    }
}