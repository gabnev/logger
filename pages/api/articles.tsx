import { verify } from "jsonwebtoken";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { secret } from "./secret";
import { authenticated } from "./users";

const sqlite = require("sqlite");
const sqlite3 = require("sqlite3");

// const authenticated = (fn: NextApiHandler) => async (
//   req: NextApiRequest,
//   res: NextApiResponse
// ) => {
//   verify(req.headers.authorization, secret, async function (err, decoded) {
//     if (!err && decoded) {
//       return await fn(req, res);
//     }

//     res.status(500).json({ message: "Sorry, you are not authenticated." });
//   });
// };

export default authenticated(async function getAllArticles(
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

  const articles = await db.all("select * from article");

  res.json(articles);
});
