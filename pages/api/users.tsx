import { NextApiRequest, NextApiResponse } from "next";

const sqlite = require("sqlite");
const sqlite3 = require("sqlite3");

const getAllUsers = async (req: NextApiRequest, res: NextApiResponse) => {
  // if (req.method !== "GET") {
  //   res.status(500).json({ message: "Sorry, only GET requests" });
  // }

  const db = await sqlite.open({
    filename: "./articles.sqlite",
    driver: sqlite3.Database,
  });

  const users = await db.all("select * from user");

  res.json(users);
};

export default getAllUsers;
