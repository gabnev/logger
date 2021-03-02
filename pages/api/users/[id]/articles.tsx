import { NextApiRequest, NextApiResponse } from "next";

import React from "react";

const getAllArticlesByUserId = (req: NextApiRequest, res: NextApiResponse) => {
  res.json({ byId: req.query.id, message: "getAllArticlesByUserId" });

  return <div></div>;
};

export default getAllArticlesByUserId;
