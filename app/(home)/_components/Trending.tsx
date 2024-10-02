import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import trends from "../trends.json"

export const Trending = () => {
    return (
        <Stack direction={"column"} gap={"20px"} alignItems={"start"} width={"100%"} >
            <Typography variant='h2' fontSize={"20px"} fontWeight={600}>
                Trending Topics
            </Typography>
            {trends.map((ele , index) => (
                <Box key={index} >
                    <Typography variant='h4' fontSize={"15px"}  color='#00000099' textTransform={"uppercase"} marginBottom={"10px"}>
                        {ele.category}
                    </Typography>
                    <Typography variant='h4' fontSize={"15px"}  color='#000000' fontWeight={700}  textTransform={"capitalize"} marginBottom={"10px"}>
                        {ele.title}
                    </Typography>
                    <Typography variant='h4' fontSize={"15px"}  color='#00000099' textTransform={"uppercase"} marginBottom={"10px"}>
                        {ele.threads}
                    </Typography>
                </Box>
            ))}

            <Typography variant='body2' color='#03A9F4' >
                see more
            </Typography>
        </Stack>
    )
}
