import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "next/link";

const User = ({ users }) => {
  const router = useRouter();
  const [user, setUser] = useState(users);

  useEffect(() => {
    async function loadData() {
      const response = await fetch(
        "http://localhost:4001/articles?name=" + router.query.user
      );
      const user = await response.json();
      setUser(user);
    }

    if (users.length == 0) {
      console.log("using loadData");
      loadData();
    }
  }, []);

  if (!user[0]) {
    return <div>loading . . .</div>;
  }

  return (
    <div>
      <p>Some article by {user[0]?.name}</p>
      <Link href="/articles">Back to articles</Link>
    </div>
  );
};

export default User;

User.getInitialProps = async ({ query, req, res }) => {
  if (!req) {
    console.log("req empty");
    return { users: [] };
  }

  const response = await fetch(
    "http://localhost:4001/articles?name=" + query.user
  );

  const users = await response.json();

  return { users: users };
};
