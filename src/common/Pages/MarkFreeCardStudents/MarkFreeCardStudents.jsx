import React from 'react'
import NewTable from '../NewTable/NewTable';
import { Button, ButtonGroup, Chip, Grid, Typography } from '@mui/material';
import NewSelect from '../../Elements/Select/NewSelect';

const MarkFreeCardStudents = () => {

    const getElements = (params) => {
        var payment;
        if(params.row.stat === 'paid'){
            payment = 'PAID'
        }else{
            payment = 'NOT-PAID'
        }
        // return <Button variant='contained' disabled={payment === 'PAID'? false : true} color='success' onClick={()=>{console.log(params.id)}}>{payment}</Button>
        return (<NewSelect none label={'Method'}>
            <option>Full Payment</option>
            <option>Half Payment</option>
            <option>Full Free</option>
        </NewSelect>)
    }

    const getChip = (params) => {
        var payment;
        if(params.row.stat === 'paid'){
            payment = 'PAID';
        }else{
            payment = 'NOT-PAID';
        }

        return <Chip label={payment} variant='contained' color={payment === 'PAID'? 'success': 'error'}/>
    }

    const rows = [
        { id: 1, name: 'Gihan Attanayake', mobile: '0775179587', final: 'attanayake', pay: 'not paid', address: 'whoknows',bday: '1998-04-29',stat: 'paid' },
        { id: 3, name: 'Gihan Chathuranga', mobile: '0716383327', final: 'attanayake', pay: 'not paid', address: 'whoknows',bday: '2001-07-19', stat: 'not-paid' },
        { id: 5, name: 'Pamudi Bhagya', mobile: '0761813970', final: 'attanayake', pay: 'not paid', address: 'whoknows',bday: '1998-05-16', stat: 'paid' },
    ];
    
    const columns = [
        { field: 'name', headerName: 'Student Name', minWidth: 200, headerClassName: 'table-header', flex: 1  },
        { field: 'mobile', headerName: 'Mobile No.', minWidth: 200, headerClassName: 'table-header', flex: 1  },
        { field: 'bday', headerName: 'Birthday', minWidth: 200, headerClassName: 'table-header', flex: 1  },
        { field: 'stat', headerName: 'Payment Status', minWidth: 200, renderCell: (params)=> { return getChip(params) }, headerClassName: 'table-header', flex: 1 },
        { field: 'settings', headerName: 'Options', minWidth: 200, renderCell: (params)=> { return getElements(params) }, headerClassName: 'table-header', flex: 1 },
    ];

  return (
    <>
        <Typography variant="h5" sx={{ marginTop: 2 }}>
            Mark Free/Half Card Students
        </Typography>
        <Grid container marginY={2} spacing={1}>
            <Grid item marginLeft={'auto'} xs={6} md={3}>
            <NewSelect none label={'Select Teacher'}>
                <option>Gihan</option>
                <option>Chathuranga</option>
            </NewSelect>
            </Grid>
            <Grid item marginRight={'auto'} xs={6} md={3}>
            <NewSelect none label={'Select Class'}>
                <option>Class One</option>
                <option>Class Two</option>
            </NewSelect>
            </Grid>
        </Grid>
        <hr/>
        <NewTable rows={rows} columns={columns}/>
    </>
  )
}

export default MarkFreeCardStudents;