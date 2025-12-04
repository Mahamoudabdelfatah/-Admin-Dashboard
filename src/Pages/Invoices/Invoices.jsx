import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { rows, columns } from './data'
import { Box } from '@mui/material'
import Header from '../../Components/Header/Header';


const Invoices = () => {
  return (
    <Box sx={{ width: "650", maxWidth: 1200, mx: "auto", mt: 3 }}>
      <Header title={"INVOICES"} subTitle={"List of Invoice Balances"} />

      <DataGrid
        checkboxSelection
        rows={rows}
        columns={columns}
      />
    </Box>
  )
}

export default Invoices
