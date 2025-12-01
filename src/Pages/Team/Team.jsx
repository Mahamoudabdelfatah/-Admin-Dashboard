import { DataGrid } from '@mui/x-data-grid'
import React from 'react'
import { rows } from './data'
import { useTheme } from '@mui/material'
import { Box, Typography } from "@mui/material";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";







const Team = () => {

  const theme = useTheme()

  const columns = [
    { field: 'id', headerName: 'ID', align: "center", headerAlign: "center" },
    { field: 'name', headerName: 'Name', align: "center", headerAlign: "center" },
    { field: 'email', headerName: 'Email', align: "center", headerAlign: "center", flex: 1 },
    { field: 'age', headerName: 'Age', align: "center", headerAlign: "center" },
    { field: 'phone', headerName: 'Phone', align: "center", headerAlign: "center", flex: 1 },
    {
      field: 'access', headerName: 'Access', align: "center", headerAlign: "center", flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box sx={{
            p: "5px",
            mt: 1,
            textAlign: "center",
            width: "100px",
            height: 35,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 1,
            gap: 0.5,
            color: "#fff",
            margin: "auto",
            backgroundColor: access === "Admin" ? theme.palette.primary.dark : access === "Manager" ? theme.palette.secondary.main : "#3da48a",
          }} >

            {access === "Admin" && <AdminPanelSettingsOutlined fontSize='small' />}
            {access === "Manager" && <SecurityOutlined fontSize='small' />}
            {access === "User" && <LockOpenOutlined fontSize='small' />}
            <Typography sx={{ fontSize: "13px" }} >{access}</Typography>
          </Box>
        )
      }

    },
  ];







  return (
    <>


      <Box sx={{ height: 600, width: '98%', mx: "auto" }}>
        <DataGrid rows={rows} columns={columns} />
      </Box>


    </>
  )
}

export default Team
