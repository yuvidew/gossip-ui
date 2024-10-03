import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
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
                    <Typography variant='d2'>
                        {ele.category}
                    </Typography>
                    <Typography variant='d1'>
                        {ele.title}
                    </Typography>
                    <Typography variant='d2'>
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
