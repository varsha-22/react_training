import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckIcon from "@material-ui/icons/Check";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import Pagination from "material-ui-flat-pagination";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  root: {
    width: "100%",
    overflowX: "auto"
  },
  table: {
    minWidth: 500
  }
});

const row = (
  x,
  i,
  header,
  handleRemove,
  startEditing,
  editIdx,
  handleChange,
  stopEditing
) => {
  const currentlyEditing = editIdx === i;
  return (
    <TableRow key={`tr-${i}`}>
      {header.map((y, k) => (
        <TableCell key={`trc-${k}`}>
          {currentlyEditing ? (
            <TextField
              name={y.prop}
              onChange={e => handleChange(e, y.prop, i)}
              value={x[y.prop]}
            />
          ) : (
            x[y.prop]
          )}
        </TableCell>
      ))}
      <TableCell>
        {currentlyEditing ? (
          <CheckIcon onClick={() => stopEditing()} />
        ) : (
          <EditIcon onClick={() => startEditing(i)} />
        )}
      </TableCell>
      <TableCell>
        <DeleteIcon onClick={() => handleRemove(i)} />
      </TableCell>
    </TableRow>
  );
};

export default ({
  data,
  header,
  handleRemove,
  startEditing,
  editIdx,
  handleChange,
  stopEditing,
  handleSort,
  sortDirection,
  columnToSort,
  offset,
  onClickPage,
  total
}) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table>
        <TableHead>
          <TableRow>
            {header.map((x, i) => (
              <TableCell key={`thc-${i}`}>
                <div onClick={() => handleSort(x.prop)}>
                  <span>{x.name}</span>
                  {columnToSort === x.prop ? (
                    sortDirection === "asc" ? (
                      <ArrowUpwardIcon />
                    ) : (
                      <ArrowDownwardIcon />
                    )
                  ) : null}
                </div>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((x, i) =>
            row(
              x,
              i,
              header,
              handleRemove,
              startEditing,
              editIdx,
              handleChange,
              stopEditing
            )
          )}
        </TableBody>
      </Table>
      <Pagination
        limit={10}
        offset={offset}
        total={total}
        onClick={handleChange}
      />
    </Paper>
  );
};
