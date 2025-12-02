import { DataGrid , GridToolbar} from '@mui/x-data-grid'
import { rows, columns } from './data'
import { useTheme } from '@mui/material'
import { Box, Typography } from "@mui/material";


const Contacts = () => {

  const theme = useTheme()



  return (
    <>
      <Box sx={{ width: "95%", maxWidth: 1200, mx: "auto", mt: 3 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          />
      </Box>
    </>
  )
}

export default Contacts
