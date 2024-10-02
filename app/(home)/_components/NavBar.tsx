import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Image from 'next/image';
import { NavigationLink } from '@/app/(home)/_components/NavigationLink';
import { SettingComp } from './SettingComp';

export const NavBar = () => {
    return (
        <Box 
            sx={{
                flexGrow: 1,
                backgroundColor: "#fff",
                color: "black",
            }}
        >
            <AppBar
                position="fixed"
                sx={{
                    backgroundColor: "#fff",
                    color: "black",
                }}
            >
                <Toolbar sx={{ width : '85%' , margin : "auto" }} >
                    <Box sx={{ width: "25%"}}>
                        <Image
                            src="./logo.svg"
                            alt="logo"
                            width={65}
                            height={65} 
                            unoptimized
                        />
                    </Box>
                    <Box sx={{ width: "60%" }}>
                        <NavigationLink/>
                    </Box>
                    <Box sx={{ width: "25%" }}>
                        <SettingComp/>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
