// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import https from 'https';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  text: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  https.get('https://api.nhtsa.gov/SafetyRatings/modelyear/2013/make/Acura/model/rdx', (resp) => {
    let data = '';

    // A chunk of data has been received.
    resp.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      console.log(JSON.parse(data).explanation);
      res.status(200).json({ text: JSON.parse(data).explanation });
    });

  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
}