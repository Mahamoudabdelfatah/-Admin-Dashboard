import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../SideBar/SideBar';
import TopBar from '../TopBar/TopBar';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';



const drawerWidth = 240;





const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));


const Layout = ({ setMode }) => {
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />

                <TopBar open={open} handleDrawerOpen={handleDrawerOpen} setMode={setMode} />


                <SideBar open={open} handleDrawerClose={handleDrawerClose} />



                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <DrawerHeader />
                    <Typography component={"div"} sx={{ marginBottom: 2 }}>
                        <Outlet />
                    </Typography>

                </Box>
            </Box>

        </div>
    )
}

export default Layout
