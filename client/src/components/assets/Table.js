import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import * as BiIcons from "react-icons/bi";

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
  paper: {
    width: "80%",
    marginTop: "30px",
  },
  tableRow: {
    backgroundColor: "white",
  },
});

export default function AssetsTable() {
  const classes = useStyles();
  const [assets, setAssets] = useState([
    { asset: "ESOP", cost: "1000", value: "1000" },
    { asset: "Gold Bond", cost: "1000", value: "1000" },
  ]);

  return (
    <DragDropContext
      onDragEnd={(result) => {
        const { destination, source, draggableId } = result;
        if (!destination) {
          return;
        }
        if (
          destination.droppableId === source.droppableId &&
          destination.index === source.index
        ) {
          return;
        }
        const assetList = Object.assign([], assets);
        const asset = assets[source.index];
        assetList.splice(source.index, 1);
        assetList.splice(destination.index, 0, asset);
        setAssets(assetList);
      }}
    >
      <TableContainer className={classes.paper} component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Assets</TableCell>
              <TableCell align="right">Cost</TableCell>
              <TableCell align="right">Value</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <Droppable droppableId={2}>
            {(provided) => (
              <TableBody
                innerRef={provided.innerRef}
                {...provided.droppableProps}
              >
                {assets.map((asset, idx) => (
                  <Draggable draggableId={asset.asset} index={idx}>
                    {(provided) => (
                      <TableRow
                        className={classes.tableRow}
                        key={asset.asset}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        innerRef={provided.innerRef}
                      >
                        <TableCell component="th" scope="row">
                          {asset.asset}
                        </TableCell>
                        <TableCell align="right">{asset.cost}</TableCell>
                        <TableCell align="right">{asset.value}</TableCell>
                        <TableCell align="right">
                          {<BiIcons.BiDotsVerticalRounded />}
                        </TableCell>
                      </TableRow>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </TableBody>
            )}
          </Droppable>
        </Table>
      </TableContainer>
    </DragDropContext>
  );
}
