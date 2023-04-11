import { NextApiRequest, NextApiResponse } from "next";
import { google } from 'googleapis';

type SheetForm = {
    name: string,
    fathername: string,
    contact: number,
    formattedDateTime: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    if (req.method !== "POST") {
        return res.status(405).send({ message: 'Only Post requests are allowed'})
    }
    const body = req.body as SheetForm
    try{
        // prepare auth
        const auth = new google.auth.GoogleAuth({credentials: { client_email: "maet-group@maet-group.iam.gserviceaccount.com", 
        private_key:"-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC0caNOLsHafI4B\nUBV2EF1yS7ABMnbGFrXjrs/hmU9MDhzqNmfb4XggcLIPXGbe6Tfiez1A53XdPySO\n5lBYhImzDpUKwGY8CpyuPDcFpGz5HCLz0Hgci3BfbJD/YDzfb0nkIQa3YrlhAvMr\nON0kaAhAF2FmAulZJWpGmORrzG2cpUTjs/13FItlL3DhxzCIvA2OQ4TGS37m+xv7\nMhBRxFmBRym1F0/zCH6PBVkvvMwtsbI9gDnHCuBwi3Y6b3E46fbDghr2CsQodL7/\nZ/p4N3s7iTGLOL1GBWNyFnOowfPJfzK+Av2INiPFYiOzw0Z8wMjbr3npSqU2NcnX\nWk9CBfmZAgMBAAECggEAA5r/rdi+U9zIQ5tzilPiYh3ECwoUmHmssbt0+OeEz5q6\nli13HswfB9rom+j3Pz3+uV5IB4t4be7MjrRoZ5RiYfsJHFli0ZFOtyaJ3Ol/qeyX\ngDKqq7tXh/iV3xxvqvFA0zebuD9XP+p8rGDq/ka733f4IL8vJXJbcMSuT78ac5ZL\nNZ1K040+iTn2G6Z/eKsDUDNwiJYGX1n5nQvr9OEpHoBsjRxnLvI3c4EZ7U6ubt62\nDTWY8XahToW7HHFDMtYb20agHeGD4Ie9oh1M2awU6Xj41+dg7WKpDSlxgzWDbz0m\nSGRXuMcBd4TU6ceEsQqSDekaGZxie/v2Ioz3AhMhpwKBgQDeEC8RGbStPMf56iWS\nbIDjhLozyIfiwuAlfEr+ED3GW4HVqf6dSuRaRSJ8PnMs3OEVmtSzZmW0fVy9/Je2\nQV/dBgv5L9sgHRdlHgot5CMnxEu/aDYo7PQgW+YUidopjPd6kYhatAiCFn8LMtYb\nAdD9hWQtedyVr7Rea80y+HCF2wKBgQDQBSyrS6sdswKfN6KSQBt/bTBrFbNkWf5t\ncyqEK5t+Mqo98hUGEI4FpopRR5PD9frBmXPgfRNHripkiTsDkuW/7tPLdk0DJMGC\nkk1JaDRF3knMSLJ1s5BxjSX57CtnK09prLLqjURb4waXW5mzC0IUKZfVJFzvr3jk\nbcemTH0qmwKBgFUgORrCEuvyB+r64mpOI96UC9k7/zNjZw+XpRvd2ACJJa1lnFBp\n3D3qkLy2J+rDxZlFoFIhZ82X3QyLnxDj4L7WyZI90S9vV3+Q03AiK4PcEPmQFmr7\n4t3gvMOU0Mfq3RfkYDP9HeHYg90kIMV7ncUB9JQmSfQrxeYIR0JJ0MDPAoGBALHm\nuv0ECaOspGFmQzKwgNPJnc73ECSSknUoOQQwBxs2WUIA9tno7o0GkORSQp0kkP9h\nLSifzw1OdhLlCgNUbghnR9qJofM+TABO/qn45Ducj6CVy4m9t5plDEVhJP1mnNPT\nTnApwHyU+94WCKyGxExaBe/S2WhiuREikcw3PhRhAoGADl7ZR9AvFex+5SpSGJBg\nj9phk97PUGsYSn1rtmgWqK/aqon/eYjIY03frQxdcZbV5wXD/QZPHF5BnzrXvP/V\ntgXQMF0hEM5SGPpfXK6w4s6KEvGiZcjnlda9vzR79SUygwhUu1Rh3iCYFNpyG4t0\nu+8S3pzuUsuwx0YZ1Ao1ESk=\n-----END PRIVATE KEY-----\n"},
        scopes: ['https://www.googleapis.com/auth/spreadsheets']})
        
        const sheets = google.sheets({auth,version: 'v4'})
        const respose = await sheets.spreadsheets.values.append({spreadsheetId: "1jZo_pNjFM3V1rHexmWGC3cdlmEiM_vho2whtwlW9sn8", range: 'A1:D1', valueInputOption: 'USER_ENTERED', requestBody:{values:[[body.name, body.fathername, body.contact,  body.formattedDateTime ]]}} );
        console.log("done")
        return res.status(200).json({data: respose.data})
    }catch(err){
        console.log(err);
        return res.status(500);
    }
}