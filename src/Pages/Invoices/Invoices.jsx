import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { rows, columns } from './data'
import { Box } from '@mui/material'

const Invoices = () => {
  return (
    <Box sx={{ width: "650", maxWidth: 1200, mx: "auto", mt: 3 }}>
      <DataGrid
        checkboxSelection
        rows={rows}
        columns={columns}
      />
    </Box>
  )
}

export default Invoices
