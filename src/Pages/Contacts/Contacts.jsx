import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { rows, columns } from './data'
import { useTheme } from '@mui/material'
import { Box, Typography } from "@mui/material";
import Header from '../../Components/Header/Header';


const Contacts = () => {




  return (
    <>
      <Box sx={{ width: "650", maxWidth: 1200, mx: "auto", mt: 3 }}>

        <Header title={"CONTACTS"} subTitle={"Welcome to your dashboard"} />

        <DataGrid
          rows={rows}
          columns={columns}
        />
      </Box>
    </>
  )
}

export default Contacts
