import { Box, Button, ButtonGroup, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import NewSelect from '../../common/Elements/Select/NewSelect'
import NewTable from '../../common/Pages/NewTable/NewTable'
import axios from 'axios'
import { useFormik } from 'formik'

const ListOfSuperAdmins = () => {

  const [institutes, setInstitutes] = useState([]);
  const [rows, setRows] = useState([]);

  const columns = [
    {
      field: "instName",
      headerName: <strong>Super Admin Name</strong>,
      width: 200,
      headerClassName: "table-header",
    },
    {
      field: "payType",
      headerName: <strong>Institute Name</strong>,
      minWidth: 200,
      headerClassName: "table-header",
      flex: 1,
    },
    {
      field: "payDate",
      headerName: <strong>Contact No.</strong>,
      minWidth: 200,
      headerClassName: "table-header",
      flex: 1,
    },
    {
      field: "lastPayDate",
      headerName: <strong>Email</strong>,
      minWidth: 200,
      headerClassName: "table-header",
      flex: 1,
    },
    {
      field: "status",
      headerName: <strong>Status</strong>,
      minWidth: 200,
      headerClassName: "table-header",
      flex: 1,
      renderCell: (params) => {
        return true ? <Typography sx={{color: 'green'}} color={'success'}>ACTIVE</Typography> : <Typography color={'error'}>INACTIVE</Typography>
      }
    },
    {
      field: "settings",
      headerName: "Settings",
      minWidth: 340,
      renderCell: (params) => (
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button color="error">Remove</Button>
          <Button color="warning">Update</Button>
        </ButtonGroup>
      ),
      headerClassName: "table-header",
      flex: 1,
    },
  ];

  const getInstitutes = async () => {
    let userData = localStorage.getItem("userData");
    if (userData) {
      let token = JSON.parse(userData).token;
      await axios
        .get("/institute/getallactive", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((data) => {
          console.log("institutes", data.data);
          setInstitutes(data.data);
          // setLoading(false);
        })
        .catch((error) => {
          console.log("error in institutes", error);
        });
    }
  };

  // complete the application from here. get the super admin details from the database and show them on the table

  const onSubmit = event => {
    console.log(event);
    axios.get('/owner/getsuperadmins')
    .then(data => {

    })
    .catch(error => {

    })

  }

  const formik = useFormik({
    initialValues: {instName:''},
    onSubmit
  })

  useEffect(() => {
    getInstitutes();
  },[]);

  return (
    <>
        <Box marginX={'auto'} sx={{marginBottom: '3vh'}}>
            <form onChange={formik.handleSubmit}>
              <NewSelect value={formik.values.instName} onChange={formik.handleChange} none name={'instName'} label={'Select Institute'}>
              {
                institutes.map((inst) => {
                  return (
                    <option key={inst._id} value={inst._id}>{inst.instName}</option>
                  )
                })
              }
              </NewSelect>
            </form>
        </Box>
        <hr/>
        <NewTable rows={rows} columns={columns}/>
    </>
  )
}

export default ListOfSuperAdmins;