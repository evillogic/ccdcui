import { fetchTemplates } from "@/utils/mongo";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method == 'GET') {
        const id = req.query.id
        const query = { _id: id}
        const templates = await fetchTemplates(query);
        res.status(200).json({ templates })
    } else if (req.method == 'DELETE') {
        const id = req.query.id
        const query = { _id: id}
        const templates = await fetchTemplates(query);
        if templates === [] {
            res.status(404).json({ templates })
        } else {
            const deletion = await deleteTemplate(templates);
            res.status(200).json({ deletion })
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' })
    }
}
