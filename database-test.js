const sqlite = require("sqlite");
const sqlite3 = require("sqlite3");

(async () => {
  // open the database
  const db = await sqlite.open({
    filename: "/articles.sqlite",
    driver: sqlite3.Database,
  });

  await db.migrate({ force: true });

  const articles = await db.all("select * from article");

  console.log(JSON.stringify(articles, null, 4));
})();
