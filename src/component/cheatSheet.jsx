import React, { Fragment } from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

export default () => {
  //markdown syntax array to map through
  // first item in array is markdown element and last is markdown syntax
  const cheatSheetArray = [
    [
      "Heading",
      <Fragment>
        # H1 <br /> ## H2 <br />
        ### H3
      </Fragment>,
    ],
    ["Bold", <Fragment>**bold text here**</Fragment>],
    ["Italic", <Fragment>*italicized text*</Fragment>],
    ["Blockquote", <Fragment> {">"} blockquote</Fragment>],
    [
      "Ordered List",
      <Fragment>
        1. First item <br />
        2. Second item <br />
        3. Third item <br />
      </Fragment>,
    ],
    [
      "Unordered List",
      <Fragment>
        - First item <br />
        - Second item <br />
        - Third item <br />
      </Fragment>,
    ],
    ["Code", <Fragment>`code`</Fragment>],
    ["Horizontal Rule", <Fragment>---</Fragment>],
    ["Link", <Fragment>[title](https://www.example.com)</Fragment>],
    ["Image", <Fragment>![alt text](image.jpg)</Fragment>],
  ];

  return (
    <Paper elevation={4} style={{ marginTop: "30px", overflow: "auto" }}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align="left">Element</TableCell>
            <TableCell align="center">Markdown Syntax</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* loop through each syntax in cheatsheet object and return new jsx element */}
          {cheatSheetArray.map(([element, syntax], index) => (
            // Don't forget the key={index} else react will yell at you
            <TableRow key={index}>
              <TableCell>{`${index + 1}.`}</TableCell>
              <TableCell>{element}</TableCell>
              <TableCell align="center">{syntax}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};
