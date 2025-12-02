import { DataGrid , GridToolbar} from '@mui/x-data-grid'
import { rows, columns } from './data'
import { useTheme } from '@mui/material'
import { Box, Typography } from "@mui/material";


const Contacts = () => {




  return (
    <>
      <Box sx={{ width: "650", maxWidth: 1200, mx: "auto", mt: 3 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          />
      </Box>
    </>
  )
}

export default Contacts
