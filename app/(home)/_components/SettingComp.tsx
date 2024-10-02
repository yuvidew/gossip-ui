import Box  from '@mui/material/Box'
import Image from 'next/image'
import React from 'react'

export const SettingComp = () => {
    return (
        <Box 
            sx={{
                display : "flex",
                alignItems: "center",
                justifyContent : "end",
                gap : "48px"
            }}
        >
            <Image 
                src={"./nav-icon/setting.svg"}
                alt={"setting"}
                width={20}
                height={20}
            />
            <Image 
                src={"./nav-icon/menu.svg"}
                alt={"menu"}
                width={20}
                height={20}
            />
        </Box>
    )
}
