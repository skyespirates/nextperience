import { NextApiRequest, NextApiResponse } from "next";

export default function user(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ name: "skyes crawford" });
}
