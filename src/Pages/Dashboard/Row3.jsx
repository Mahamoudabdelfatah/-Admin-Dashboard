import { Box, Paper, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'
import PieChart from '../Pie/PieChart'
import BarChart from '../Bar/BarChart'
import GeographyDes from '../Geography/GeographyDes'

const Row3 = () => {
  const theme = useTheme()
  return (
    <Stack mt={3} flexDirection={"row"} gap={2} flexWrap={"wrap"}>
      <Paper sx={{ flexGrow: 1, minWidth: "300px", width: "28%" }} >
        <Typography
          color={theme.palette.secondary.main}
          sx={{ padding: "30px 30px 0 30px" }}
          variant="h6"
          fontWeight="600"
        >
          Campaign
        </Typography>
        <PieChart isDashboard={true} />
        <Typography variant="h6" align="center" sx={{ mt: "15px" }}>
          $48,352 revenue generated
        </Typography>
        <Typography variant="body2" px={0.7} pb={3} align="center">
          Includes extra misc expenditures and costs
        </Typography>
      </Paper>



      <Paper sx={{ flexGrow: 1, minWidth: "300px", width: "33%" }} >
        <Typography
          color={theme.palette.secondary.main}
          variant="h6"
          fontWeight="600"
          sx={{ padding: "30px 30px 0 30px" }}
        >
          Sales Quantity
        </Typography>
        <BarChart isDashboard={true} />
      </Paper>


      <Paper sx={{ flexGrow: 1, minWidth: "300px", width: "33%" }} >
        <GeographyDes isDashboard={true} />
      </Paper>
    </Stack>
  )
}

export default Row3
