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
  let data:string = '';

  https.get(`https://api.nhtsa.gov/products/vehicle/models?modelYear=${year}&make=${make}&issueType=c`, (resp: IncomingMessage) => {
    

    // A chunk of data has been received.
    resp.on('data', (chunk: any) => {
      data += chunk.toString();
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      const avaiaibleModels = JSON.parse(data).results.map(({model}: any)=>({
          Model: model
      }))
    res.status(200).json({ text: avaiaibleModels});
    });

  }).on("error", (err) => {
    
    console.log("Error: " + err.message);
  });
}