import { NextApiRequest, NextApiResponse } from "next";
import { hash } from "bcrypt";

const sqlite = require("sqlite");
const sqlite3 = require("sqlite3");

const signup = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = await sqlite.open({
    filename: "./articles.sqlite",
    driver: sqlite3.Database,
  });

  // Later on: add validations to the uniqueness of email, size of password, etc...

  if (req.method === "POST") {
    hash(req.body.password, 10, async function (err, hash) {
      await db.run(
        "INSERT INTO User (name, email, password) values (?, ?, ?)",
        req.body.name,
        req.body.email,
        hash
      );

      const user = await db.all("select * from User");

      res.json(user);
    });
  } else {
    res.status(405).json({ message: "we only support POST" });
  }
};

export default signup;
