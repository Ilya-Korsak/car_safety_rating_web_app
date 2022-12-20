// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { IncomingMessage } from 'http';
import https from 'https';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  text: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {
    query,
    method,
  } = req

  let data:string = '';
  https.get('https://api.nhtsa.gov/SafetyRatings/modelyear/2013/make/Acura/model/rdx', (resp: IncomingMessage) => {
    

    // A chunk of data has been received.
    resp.on('data', (chunk: any) => {
      data += chunk.toString();
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      res.status(200).json({ text: JSON.parse(data)});
    });

  }).on("error", (err) => {
    console.error("Error: " + err.message);
  });
}