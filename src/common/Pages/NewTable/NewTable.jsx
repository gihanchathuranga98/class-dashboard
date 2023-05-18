import React from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Button, Grid } from '@mui/material';
import './NewTable.css'
import NewTextField from '../../Elements/TextFields/NewTextField';
import NewSelect from '../../Elements/Select/NewSelect';


const NewTable = () => {

    const [value, setValue] = React.useState('');
    const [selectedCol, setSelectedCol] = React.useState();

    const handleSelect = (event) => {
        if(event.target.value !== ''){
            document.getElementById('filter').focus()
        }
        setSelectedCol(event.target.value)
    }

    var rows = [
        { id: 1, col1: 'Hello', col2: 'World', name: 'gihan', final: 'attanayake', pay: 'not paid', address: 'whoknows'},
        { id: 3, col1: 'DataGridPro', col2: 'is Awesome', name: 'gihan', final: 'attanayake', pay: 'not paid', address: 'whoknows' },
        { id: 5, col1: 'MUI', col2: 'is Amazing', name: 'gihan', final: 'attanayake', pay: 'not paid', address: 'whoknows' },
      ];
      
      const columns = [
        { field: 'id', headerName: <strong>ID</strong>, hideable: true, width: 200, headerClassName: 'table-header' },
        { field: 'col1', headerName: 'Column 1', minWidth: 200, hideable: true, headerClassName: 'table-header'  },
        { field: 'col2', headerName: 'Column 2', minWidth: 200, hideable: true, headerClassName: 'table-header'  },
        { field: 'name', headerName: 'Name', minWidth: 200, hideable: true, headerClassName: 'table-header'  },
        { field: 'final', headerName: 'Final', minWidth: 200, hideable: true, headerClassName: 'table-header'  },
        { field: 'pay', headerName: 'Payment', minWidth: 200, hideable: true, headerClassName: 'table-header'  },
        { field: 'address', headerName: 'Address', minWidth: 200, hideable: true, headerClassName: 'table-header'  },
        { field: 'settings', headerName: 'Settings', minWidth: 200, hideable: true, renderCell: (params)=> (<Button variant='contained' color='warning' onClick={()=>{console.log(params.id)}}>Update</Button>), headerClassName: 'table-header' },
      ];

      const items = [
        {field: selectedCol, operator: 'contains', value: value}
      ]
      

  return (
    <>
        <Grid container marginY={1} columnSpacing={1}>
        <Grid item xs={12} md={6} lg={2}>
            <NewSelect id={'selector'} none value={selectedCol} onChange={handleSelect} label={'Select Column'}>
                {columns.map(col=>(
                    <option value={col.field}>{col.headerName}</option>
                ))}
            </NewSelect>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
                <NewTextField id={'filter'} label={'Filter'} onChange={event => {setValue(event.target.value)}}/>
            </Grid>
        </Grid>
        <div className='datadiv' >
        <DataGrid autoHeight rows={rows} columns={columns} slots={{toolbar: GridToolbar}} filterModel={{items}}/>
        </div>
    </>
  )
}

export default NewTable;