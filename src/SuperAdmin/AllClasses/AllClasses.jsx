import React from "react";
import SimpleInfoCard from "../../common/Elements/SimpleInfoCard/SimpleInfoCard";
import { Button, Grid, Typography } from "@mui/material";
import MyTable from "./Table/Table";
import data from "./data.json";
import EditDetailsPopup from "../../common/Elements/EditDetailsPopup/EditDetailsPopup";
import NewTextField from "../../common/Elements/TextFields/NewTextField";
import NewSelect from "../../common/Elements/Select/NewSelect";

const AllClasses = () => {

    const columns = [
        {
          Header: "Class ID",
          accessor: "id",
        },
        {
          Header: "Class Name",
          accessor: "inst-name",
        },
        {
          Header: "Teacher Name",
          accessor: "owner-name",
        },
        {
          Header: "Total Student Count",
          accessor: "contact-no",
        },
        {
          Header: "Class Time",
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
        <Typography variant="h5" sx={{ marginTop: 5 }}>
        Details of Classes
      </Typography>
      <Grid container>
        <Grid marginX={'auto'} xs={12} md={6} lg={4}>
            <NewSelect label={'Select a Teacher'} none>
                <option>Gihan Chathuranga</option>
                <option>Chathuranga Attanayake</option>
            </NewSelect>
        </Grid>
      </Grid>
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
  )
}

export default AllClasses