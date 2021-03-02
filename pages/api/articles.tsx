import { NextApiRequest, NextApiResponse } from "next";

const getAllArticles = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    res.status(500).json({ message: "sorry, only GET requests" });
  }

  res.json({ hello: "world", method: req.method });

  return (
    <div>
      <p>Articles endpoint</p>
    </div>
  );
};

export default getAllArticles;
