import { Grid } from '@mui/material'
import React from 'react'

function MaterialGridSample() {




    return (<>

        <Grid container columnSpacing={{ md: 3 }}>
            <Grid container style={{ backgroundColor: 'tomato' }} item xs={12} md={6}>
                <Grid item xs={6}>1</Grid>
                <Grid item xs={6}>2</Grid>
            </Grid>
            <Grid style={{ backgroundColor: 'brown' }} item xs={12} md={6}>
                <span>6 birim</span>
            </Grid>
        </Grid>
    </>
    )
}

export default MaterialGridSample