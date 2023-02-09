import React from 'react'
import Calender from './Calender'
import Dashboard from './Dashboard'
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import Forms from './Forms';

const Show = () => {

  return (
    <div>
        
       <Grid container spacing={1}>
        <Grid item xs={12} md={4}>
                <Dashboard/>
            </Grid>
            <Grid item xs={12} md={8}>
                    <Calender/>
                </Grid>
            </Grid>
    </div>
  )
}

export default Show