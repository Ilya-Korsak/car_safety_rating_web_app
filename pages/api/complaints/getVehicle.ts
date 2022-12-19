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
  } = req;
  console.log(query);
  let year = query.year?.toString();
  let make = query.make?.toString();
  let model = query.model?.toString();
  let data:string = '';

  https.get(`https://api.nhtsa.gov/complaints/complaintsByVehicle?make=${make}&model=${model}&modelYear=${year}`, (resp: IncomingMessage) => {
    

    // A chunk of data has been received.
    resp.on('data', (chunk: any) => {
      data += chunk.toString();
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
        console.log(data);
      const avaiaibleModifications = JSON.parse(data).results
    res.status(200).json({ text: avaiaibleModifications});
    });

  }).on("error", (err) => {
    
    console.log("Error: " + err.message);
  });
}