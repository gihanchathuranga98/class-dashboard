import { Typography, Button, ButtonGroup } from '@mui/material'
import React from 'react'
import NewTable from '../../common/Pages/NewTable/NewTable';

const DetailsOfAdmins = () => {

    const getElements = (params) => {
        // return <Button variant='contained' color='primary' onClick={()=>{console.log(params.id)}}>Assign</Button>
        return (
            <ButtonGroup variant={'contained'} aria-label="outlined primary button group">
                <Button color='error'>Remove</Button>
                <Button color='warning'>Edit</Button>
                <Button color='primary'>Edit Previlage</Button>                  
            </ButtonGroup>
        )
    }

    const rows = [
        { id: 1, name: 'Gihan Attanayake', mobile: '0775179587', final: 'attanayake', pay: 'not paid', address: 'whoknows',bday: '1998-04-29' },
        { id: 3, name: 'Gihan Chathuranga', mobile: '0716387197', final: 'attanayake', pay: 'not paid', address: 'whoknows',bday: '2001-07-19' },
        { id: 5, name: 'Pamudi Bhagya', mobile: '0761813970', final: 'attanayake', pay: 'not paid', address: 'whoknows',bday: '1998-05-16' },
    ];
    
    const columns = [
        { field: 'name', headerName: 'Admin Name', minWidth: 200, headerClassName: 'table-header', flex: 1  },
        { field: 'mobile', headerName: 'Mobile No.', minWidth: 200, headerClassName: 'table-header', flex: 1  },
        { field: 'bday', headerName: 'Username', minWidth: 200, headerClassName: 'table-header', flex: 1  },
        { field: 'settings', headerName: 'Options', minWidth: 350, renderCell: (params)=> { return getElements(params) }, headerClassName: 'table-header', flex: 1 },
    ];

  return (
    <>
        <Typography variant="h5" sx={{ marginTop: 2 }}>
            Details of Admins
        </Typography>
        <NewTable rows={rows} columns={columns}/>
    </>
  )
}

export default DetailsOfAdmins;