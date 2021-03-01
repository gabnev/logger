import Link from "next/link";
import { useState, useEffect } from "react";

const Articles = ({ users }) => {
  const renderList = () => {
    if (users !== null) {
      return users.map((user, index) => {
        return (
          <div key={index}>
            <Link href={`/articles/${user.name}`}>{user.name}</Link>
          </div>
        );
      });
    } else {
      return <p>Loading . . .</p>;
    }
  };

  return <div>{renderList()}</div>;
};

export default Articles;

Articles.getInitialProps = async () => {
  const response = await fetch("http://localhost:4001/articles");

  const users = await response.json();

  return { users };
};
