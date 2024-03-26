import type { NextApiRequest, NextApiResponse } from "next";
import { fetchReports } from "@/utils/mongo";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method == 'GET') {
        const id = req.query.id
        const query = { _id: id}
        const reports = await fetchReports(query);
        res.status(200).json({ reports })
    } else if (req.method == 'DELETE') {
        const id = req.query.id
        const query = { _id: id}
        const reports = await fetchReports(query);
        if reports === [] {
            res.status(404).json({ reports })
        } else {
            const deletion = await deleteReports(reports);
            res.status(200).json({ deletion })
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed'})
    }
}
