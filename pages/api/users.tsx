import { verify } from "jsonwebtoken";
import { NextApiRequest, NextApiResponse, NextApiHandler } from "next";
import { send } from "process";
import { secret } from "./secret";

const sqlite = require("sqlite");
const sqlite3 = require("sqlite3");

// this authenticated method should be its own file

export const authenticated = (fn: NextApiHandler) => async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  verify(req.headers.authorization, secret, async function (err, decoded) {
    if (!err && decoded) {
      return await fn(req, res);
    }

    res.status(401).json({ message: "Sorry, you are not authenticated." });
  });
};

export default authenticated(async function getAllUsers(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // if (req.method !== "GET") {
  //   res.status(500).json({ message: "Sorry, only GET requests" });
  // }

  const db = await sqlite.open({
    filename: "./articles.sqlite",
    driver: sqlite3.Database,
  });

  const users = await db.all("select id, email, name from user");

  res.json(users);
});
