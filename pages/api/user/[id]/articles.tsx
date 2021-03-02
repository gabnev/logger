import { NextApiRequest, NextApiResponse } from "next";

const sqlite = require("sqlite");
const sqlite3 = require("sqlite3");

const getAllArticlesByUserId = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const db = await sqlite.open({
    filename: "./articles.sqlite",
    driver: sqlite3.Database,
  });

  const allUserArticles = await db.all(
    "select * from article where ownerId = ?",
    [req.query.id]
  );

  res.json(allUserArticles);
};

export default getAllArticlesByUserId;
