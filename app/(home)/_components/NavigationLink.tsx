
import React from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import { Stack } from '@mui/material'

export const NavigationLink = () => {
    const iconsList = [
        "./nav-icon/home.svg",
        "./nav-icon/search-desable.svg",
        "./nav-icon/hard-desable.svg",
        "./nav-icon/send-desable.svg",
        "./nav-icon/save-desable.svg",
    ]
    return (
        <Stack direction={"row"} gap={"48px"} alignItems={"center"} justifyContent={"center"} width={"100%"} >
            {iconsList.map((img , index) => (
                <Image 
                    key={index}
                    src={img}
                    alt={img}
                    width={20}
                    height={20}
                />
            ))}
        </Stack>
    )
}
