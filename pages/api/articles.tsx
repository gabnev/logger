import { NextApiRequest, NextApiResponse } from "next";

const sqlite = require("sqlite");
const sqlite3 = require("sqlite3");

const getAllArticles = async (req: NextApiRequest, res: NextApiResponse) => {
  // if (req.method !== "GET") {
  //   res.status(500).json({ message: "Sorry, only GET requests" });
  // }

  const db = await sqlite.open({
    filename: "./articles.sqlite",
    driver: sqlite3.Database,
  });

  const articles = await db.all("select * from article");

  res.json(articles);
};

export default getAllArticles;
