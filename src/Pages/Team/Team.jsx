import { DataGrid } from '@mui/x-data-grid'
import { rows } from './data'
import { useTheme } from '@mui/material'
import { Box, Typography } from "@mui/material";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";
import Header from '../../Components/Header/Header';







const Team = () => {

  const theme = useTheme()

  const columns = [
    { field: 'id', headerName: 'ID', align: "center", headerAlign: "center", width: 70 },
    { field: 'name', headerName: 'Name', align: "center", headerAlign: "center", flex: 1 },
    { field: 'email', headerName: 'Email', align: "center", headerAlign: "center", flex: 1.5 },
    { field: 'age', headerName: 'Age', align: "center", headerAlign: "center", width: 90 },
    { field: 'phone', headerName: 'Phone', align: "center", headerAlign: "center", flex: 1 },
    {
      field: 'access', headerName: 'Access', align: "center", headerAlign: "center", width: 120,
      renderCell: ({ row: { access } }) => {
        return (
          <Box sx={{
            width: "100%",
            height: 35,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 1,
            gap: 1,
            color: "#fff",
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

      <Box sx={{ width: "95%", maxWidth: 1200, mx: "auto", mt: 3 }}>
        <Header title={"TEAM"} subTitle={"Managing the Team Members"} />
        <DataGrid
          rows={rows}
          columns={columns}

          sx={{
            "& .MuiDataGrid-cell": { py: 1 }, "& .MuiDataGrid-columnHeader": { fontWeight: "bold" },
          }} />
      </Box>


    </>
  )
}

export default Team
