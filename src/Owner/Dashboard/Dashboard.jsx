import React from "react";
import SimpleInfoCard from "../../common/Elements/SimpleInfoCard/SimpleInfoCard";
import { Button, Grid, Typography } from "@mui/material";
import MyTable from "./Table/Table";
import data from "./data.json";
import EditDetailsPopup from "../../common/Elements/EditDetailsPopup/EditDetailsPopup";
import NewTextField from "../../common/Elements/TextFields/NewTextField";

const Dashboard = () => {
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

  const [open, setOpen] = React.useState(false);
  const [editID, setEditID] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const editHandler = (event) => {
    setEditID(event.target.value)
    setOpen(true)
  }

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
      <MyTable
        COLUMNS={columns}
        table_data={data}
        search_title={"Search Institutes"}
        editHandler={editHandler}
      />
      <EditDetailsPopup
        open={open}
        handleClickOpen={handleClickOpen}
        subtitle={"You can edit details of the institute using this window."}
        handleClose={handleClose}
        title={"Edit Institute " + editID}
      >
        <NewTextField label={'Institute ID'} disabled/>
        <NewTextField label={'Institute Name'}/>
        <NewTextField label={'Owner Name'}/>
        <NewTextField label={'Owner Contact No.'}/>
        <NewTextField label={'Payment Type'}/>
        <NewTextField label={'Payment Date'}/>
        <NewTextField label={'Payment'}/>
        <NewTextField label={'Payment Status'}/>
        <Grid container spacing={1} fullWidth marginY={2}>
            <Grid item xs={6}>
                <Button fullWidth onClick={()=>{setOpen(false)}} variant="outlined">Close</Button>
            </Grid>
            <Grid item xs={6}>
                <Button fullWidth variant="contained">Update</Button>
            </Grid>
        </Grid>
      </EditDetailsPopup>
    </>
  );
};

export default Dashboard;
