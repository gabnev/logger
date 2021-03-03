import { NextApiRequest, NextApiResponse } from "next";

const sqlite = require("sqlite");
const sqlite3 = require("sqlite3");

const getUserById = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = await sqlite.open({
    filename: "./articles.sqlite",
    driver: sqlite3.Database,
  });

  // Sqlite v4 version, but it is not working so far.
  // if (req.method === "PUT") {
  //   await db.run(
  //     "UPDATE user SET name = ?, email = ? where id = ?",
  //     req.body.name,
  //     req.body.email,
  //     req.query.id
  //   );
  // }

  const user = await db.get("select id, email, name from user where id = ?", [
    req.query.id,
  ]);

  res.json(user);
};

export default getUserById;
