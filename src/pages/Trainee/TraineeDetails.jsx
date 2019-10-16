import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles(theme => ({
  one: {
    width: "75%",
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(3),
    overflowX: "auto",
    border: "groove"
  },
  two: {
    minWidth: 700
  }
}));

const TraineeDetails = props => {
  const classes = useStyles();
  return (
    <div className={classes.one}>
      <Table className={classes.two}>
        <TableBody>
          <TableRow>
            <TableCell rowSpan={5}>Thumbnail</TableCell>
            <TableCell>
              <b> Sachin</b>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Thursday 15th Octuber 2019</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>sachin@gmail.com</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default TraineeDetails;
