import Link from "next/link";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const Articles = ({ list }) => {
  const renderList = () => {
    return list.map((article) => {
      return (
        <TableRow key={article.id}>
          <TableCell>{article.id}</TableCell>
          <TableCell align="right">{article.title}</TableCell>
          <TableCell align="right">{article.content}</TableCell>
          <TableCell align="right">{article.ownerId}</TableCell>
        </TableRow>
      );
    });
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">Title</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Author Id</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{renderList()}</TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Articles;

Articles.getInitialProps = async () => {
  const response = await fetch("http://localhost:3000/api/articles");
  const articles = await response.json();

  return { list: articles };
};
