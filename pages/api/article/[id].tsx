import { NextApiRequest, NextApiResponse } from "next";

const getArticleById = (req: NextApiRequest, res: NextApiResponse) => {
  res.json({ byId: req.query.id, message: "getArticleById" });

  return <div></div>;
};

export default getArticleById;
