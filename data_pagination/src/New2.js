import  Grid  from '@mui/material/Grid'
import React from 'react'
import Dashboard from './Dashboard'
import Forms from './Forms'
import NewForm from './NewForm'
import SideBar from './SideBar'

const New2 = () => {
  return (
    <div>

<Forms/>
<Grid container spacing={1}>
        <Grid item xs={12} md={2}>
                <Dashboard/>
            </Grid>
            <Grid item xs={12} md={10}>
                    <NewForm/>
                </Grid>
            </Grid>
    </div>
  )
}

export default New2