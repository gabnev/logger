import { NextApiRequest, NextApiResponse } from "next";

const getAllUsers = (req: NextApiRequest, res: NextApiResponse) => {
  res.json([{ name: "gabriel" }, { name: "stella" }]);

  return <div></div>;
};

export default getAllUsers;
