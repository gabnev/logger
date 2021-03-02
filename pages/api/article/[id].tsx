import { NextApiRequest, NextApiResponse } from "next";

const sqlite = require("sqlite");
const sqlite3 = require("sqlite3");

const getArticleById = async (req: NextApiRequest, res: NextApiResponse) => {
  // if (req.method !== "GET") {
  //   res.status(500).json({ message: "Sorry, only GET requests" });
  // }

  const db = await sqlite.open({
    filename: "./articles.sqlite",
    driver: sqlite3.Database,
  });

  const article = await db.get("select * from article where id = ?", [
    req.query.id,
  ]);

  res.json(article);
};

export default getArticleById;
