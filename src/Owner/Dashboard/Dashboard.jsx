import React, { useEffect, useState } from "react";
import SimpleInfoCard from "../../common/Elements/SimpleInfoCard/SimpleInfoCard";
import { Button, ButtonGroup, Grid, Typography } from "@mui/material";
import NewTable from "../../common/Pages/NewTable/NewTable";
import EditDetailsPopup from "../../common/Elements/EditDetailsPopup/EditDetailsPopup";
import NewTextField from "../../common/Elements/TextFields/NewTextField";
import { checkToken } from "../../common/Functions/checkUserValidity";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const navigate = useNavigate();
  const [tableData, setTableData] = useState([]);
  const [tableLoading, setTableLoading] = useState(true);

  useEffect(() => {
    try {
      const userData = localStorage.getItem("userData");
      if (userData) {
        const token = JSON.parse(userData).token;
        checkToken(token)
          .then((data) => {
            console.log("data has came", data);
            if (!data) {
              localStorage.removeItem("userData");
              navigate("/");
            }
          })
          .catch((error) => {
            localStorage.removeItem("userData");
            navigate("/");
          });
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error("error in useEffect | AddNewInstitute", error);
      localStorage.removeItem("userData");
      navigate("/");
    }
  }, []);

  const loadTable = async () => {
    let token = JSON.parse(localStorage.getItem("userData")).token;
    await axios
      .get("/institute/getall", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((data) => {
        console.log("data in table", data.data);
        var insts = [];
        for (let d of data.data) {
          console.log("running for", d);
          let instData = {
            id: d._id,
            instName: d.instName,
            ownerName: d.ownerName,
            contact: d.contact,
            payDate: new Date(d.payDate).toDateString(),
            payType: d.payType,
            status: d.status,
            payment: d.payment,
          };
          insts.push(instData);
        }
        setTableLoading(false);
        setTableData(insts);
        console.log("table data", tableData);
      })
      .catch((error) => {
        setTableLoading(false);
        console.log("error in get table data", error);
      });
  };

  useEffect(() => {
    try {
      loadTable();
    } catch (error) {
      console.log("error in useeffect of load table dashboard", error);
      setTableLoading(false);
    }
  }, []);

  // const rows = [
  //   { id: 1, col1: 'Hello', col2: 'World', name: 'gihan', final: 'attanayake', pay: 'not paid', address: 'whoknows'},
  //   { id: 3, col1: 'DataGridPro', col2: 'is Awesome', name: 'gihan', final: 'attanayake', pay: 'not paid', address: 'whoknows' },
  //   { id: 5, col1: 'MUI', col2: 'is Amazing', name: 'gihan', final: 'attanayake', pay: 'not paid', address: 'whoknows' },
  // ];

  // <Button variant='contained' color='warning' onClick={()=>{console.log(params.id)}}>Update</Button>

  const columns = [
    {
      field: "instName",
      headerName: <strong>Institute Name</strong>,
      width: 200,
      headerClassName: "table-header",
    },
    {
      field: "payType",
      headerName: <strong>Payment Type</strong>,
      minWidth: 200,
      headerClassName: "table-header",
      flex: 1,
    },
    {
      field: "payDate",
      headerName: <strong>Payment Date</strong>,
      minWidth: 200,
      headerClassName: "table-header",
      flex: 1,
    },
    {
      field: "lastPayDate",
      headerName: <strong>Last Payment Date</strong>,
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
          <Button color={params.status !== 1 ? 'primary' : 'info'}>{params.status !== 1 ? 'DEACTIVATE' : 'ACTIVATE'}</Button>
          <Button color="warning">Update</Button>
        </ButtonGroup>
      ),
      headerClassName: "table-header",
      flex: 1,
    },
  ];

  const [open, setOpen] = React.useState(false);
  const [editID, setEditID] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const editHandler = (event) => {
    setEditID(event.target.value);
    setOpen(true);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item lg={3} md={6} sm={6} xs={12}>
          <SimpleInfoCard
            title={"Number of members"}
            value={2540}
            sx={{ backgroundColor: "secondary.light" }}
          />
        </Grid>
        <Grid item lg={3} md={6} sm={6} xs={12}>
          <SimpleInfoCard
            title={"Number of members"}
            value={2540}
            sx={{ backgroundColor: "warning.light" }}
          />
        </Grid>
        <Grid item lg={3} md={6} sm={6} xs={12}>
          <SimpleInfoCard
            title={"Number of members"}
            value={2540}
            sx={{ backgroundColor: "success.light" }}
          />
        </Grid>
        <Grid item lg={3} md={6} sm={6} xs={12}>
          <SimpleInfoCard
            title={"Number of members"}
            value={2540}
            sx={{ backgroundColor: "error.light" }}
          />
        </Grid>
      </Grid>
      <Typography variant="h5" sx={{ marginTop: 5 }}>
        Details of Institutes
      </Typography>
      <NewTable columns={columns} loading={tableLoading} rows={tableData} />
      <EditDetailsPopup
        open={open}
        handleClickOpen={handleClickOpen}
        subtitle={"You can edit details of the institute using this window."}
        handleClose={handleClose}
        title={"Edit Institute " + editID}
      >
        <NewTextField label={"Institute ID"} disabled />
        <NewTextField label={"Institute Name"} />
        <NewTextField label={"Owner Name"} />
        <NewTextField label={"Owner Contact No."} />
        <NewTextField label={"Payment Type"} />
        <NewTextField label={"Payment Date"} />
        <NewTextField label={"Payment"} />
        <NewTextField label={"Payment Status"} />
        <Grid container spacing={1} marginY={2}>
          <Grid item xs={6}>
            <Button
              fullWidth
              onClick={() => {
                setOpen(false);
              }}
              variant="outlined"
            >
              Close
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button fullWidth variant="contained">
              Update
            </Button>
          </Grid>
        </Grid>
      </EditDetailsPopup>
    </>
  );
};

export default Dashboard;
