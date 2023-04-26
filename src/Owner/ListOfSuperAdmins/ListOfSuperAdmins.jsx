import { Box } from '@mui/material'
import React from 'react'
import NewSelect from '../../common/Elements/Select/NewSelect'
import Table from './Table'
import data from './data.json'

const ListOfSuperAdmins = () => {

    const columns = [
        {
          Header: "Institute ID",
          accessor: "id",
        },
        {
          Header: "Institute Name",
          accessor: "inst-name",
        },
        {
          Header: "Owner Name",
          accessor: "owner-name",
        },
        {
          Header: "Contact No.",
          accessor: "contact-no",
        },
        {
          Header: "Payment Type",
          accessor: "payment-type",
        },
        {
          Header: "Payment Date",
          accessor: "payment-date",
        },
        {
          Header: "Payment",
          accessor: "payment",
        },
      ];

  return (
    <>
        <Box marginX={'auto'} sx={{maxWidth: 400}}>
            <NewSelect none label={'Select Institute'}>
                <option>Revotech Solutions</option>
                <option>Mambek Solutions</option>
            </NewSelect>
        </Box>
        <Table COLUMNS={columns} table_data={data} search_title={'Search Super Admins'}/>
    </>
  )
}

export default ListOfSuperAdmins;