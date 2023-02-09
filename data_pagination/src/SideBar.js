import Grid from "@mui/material/Grid";
import React from "react";
import Calender from "./Calender";
import Dashboard from "./Dashboard";
import Forms from "./Forms";
import NewForm from "./NewForm";

const SideBar = () => {
  return (
    <div>
      <Forms/>
      <Grid container spacing={1}>
        <Grid item xs={12} md={2}>
          <Dashboard />
        </Grid>
        <Grid item xs={12} md={10}>
          {/* <NewForm /> */}
          {/* <Calender/> */}
        </Grid>
      </Grid>
      {/* <Forms/>
      <Dashboard/> */}

    </div>
  );
};

export default SideBar;
