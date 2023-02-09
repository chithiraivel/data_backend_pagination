import  Grid  from '@mui/material/Grid'
import React from 'react'
import  Pagination  from 'react-bootstrap/Pagination'
import Calender from './Calender'
import Dashboard from './Dashboard'
import Forms from './Forms'
import NewForm from './NewForm'

const New1 = () => {
 
  return (
    <div>
<Forms/>
<Grid container spacing={1}>
        <Grid item xs={12} md={2}>
                <Dashboard/>
            </Grid>
            <Grid item xs={12} md={10}>
                    <Calender />
                </Grid>
            </Grid>

    </div>
  )
}

export default New1