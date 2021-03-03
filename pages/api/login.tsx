import { NextApiRequest, NextApiResponse } from "next";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { secret } from "./secret";

const sqlite = require("sqlite");
const sqlite3 = require("sqlite3");

const login = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = await sqlite.open({
    filename: "./articles.sqlite",
    driver: sqlite3.Database,
  });

  if (req.method === "POST") {
    const user = await db.get("SELECT * from user where email=?", [
      req.body.email,
    ]);

    // Need to create validations to check if user is defined

    compare(req.body.password, user.password, function (err, result) {
      if (!err && result) {
        const claims = { sub: user.id, myUserEmail: user.email };
        const jwt = sign(claims, secret, {
          expiresIn: "1h",
        });

        res.json({ authToken: jwt });
      } else {
        res.json({ message: "Not OK" });
      }
    });
  } else {
    res.status(405);
  }
};

export default login;
