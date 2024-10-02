import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Image from 'next/image';

export const NavBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar 
                position="static" 
                sx={{
                    backgroundColor : "#fff",
                    color : "black",
                }}
            >
                <Toolbar>
                    <Box sx={{width : "25%" , paddingLeft : "5px"}}>
                    <Image
                        src="./logo.svg"
                        alt="logo"
                        width={80}
                        height={80}
                        unoptimized
                    />
                    </Box>
                    <Box  sx={{ width: "70%"}}>
                        News
                    </Box>
                    <Box sx={{width : "25%"}}>
                        News
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
