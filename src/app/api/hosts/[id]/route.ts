import type { NextApiRequest, NextApiResponse } from 'next'
import { fetchHosts } from '@/utils/mongo';
 
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const id = req.query.id
    const query = { _id: id}
    const hosts = await fetchHosts(query);
    res.status(200).json({ hosts })
  } else {
    res.status(405).json({ message: 'Method Not Allowed' })
  }
}