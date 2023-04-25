import React, { useMemo } from "react";
import { useTable, useGlobalFilter, useRowSelect } from "react-table";
import { Button, ButtonGroup, Grid } from "@mui/material";
import ColumnSelector from './ColumnSelector';
import NewTextField from "../../../common/Elements/TextFields/NewTextField";
import './Table.css'

const DetailsTable = ({COLUMNS, table_data, search_title, options}) => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => table_data, []);
  const [values, setValues] = React.useState([]);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    (hooks) => {
      hooks.visibleColumns.push(columns => {
        return [
          ...columns,
          {
            id: 'selection',
            Header: 'Options',
            Cell: ({row}) => (
              <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button value={row} onClick={() => console.log(row.cells[0].value)} color={'error'}>Block</Button>
                <Button>Remove</Button>
                <Button color="warning">Edit</Button>
              </ButtonGroup>
            )
          }
        ]
      })
    }
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    allColumns,
    state,
    setGlobalFilter,
  } = tableInstance;

  const { globalFilter } = state;

  return (
    <>
    <div className="container">
      <div className="one">
      <NewTextField
          label={search_title}
          id="search"
          value={globalFilter || ""}
          onChange={(e) => setGlobalFilter(e.target.value)}
        />
      </div>
      <div className="two">
      <ColumnSelector
          values={values}
          setValues={setValues}
          allColumns={allColumns}
        />
      </div>
    </div>

      <div className="tableDiv">
        <table id="customers" {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DetailsTable;
