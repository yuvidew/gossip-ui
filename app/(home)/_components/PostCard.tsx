"use client"

import React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { Avatar, Grid, Input, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface props {
    id: number,
    author: string,
    authorImg: string,
    content: string,
    img: string[],
    reposts: number,
    comments: number
}

export const PostCard = ({
    id,
    author,
    authorImg,
    content,
    img,
    reposts,
    comments
}: props) => {
    const router = useRouter()
    return (
        <Card
            sx={{
                borderRadius: "16px",
                padding: "16px 18px 16px 18px"
            }}

            onClick = {() => router.push(`/${id}`)}
        >
            <Stack
                direction={"row"}
                gap="16px"
                alignItems={"start"}
            >

                <Box 
                    
                
                >
                    <Avatar
                        alt="user"
                        src={authorImg}
                        sx={{ width: "36px", height: "36px" }}
                    /> 
                </Box>
                <Box width={"100%"}>
                    <Stack direction={"row"} alignItems={"start"} justifyContent={"space-between"}  >
                        <Typography variant='h4' sx={{ fontSize: "16px", marginBottom: "6px" }} >
                            {author}
                        </Typography>
                        <Box 
                            sx={{
                                display : "flex",
                                alignItems : "center",
                                justifyContent : "end",
                                gap : "10px"
                            }}
                        >
                            <Typography variant='body2' sx={{color : "#00000061", fontSize : "12px"}}>
                                2 min
                            </Typography>
                            <Image
                                src={"./3dot.svg"}
                                alt='3-dot'
                                width={24}
                                height={24}
                            />
                        </Box>
                    </Stack>

                    <Typography variant='body1' sx={{ fontSize: "13px", }} marginTop={"16px"}>
                        {content}
                    </Typography>
                    {img.length !== 0 &&
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} marginY={"16px"}>
                            {img.map((ele, index) => (
                                <Grid item xs={6} key={index} padding={"0"}>
                                    <Image
                                        src={ele}
                                        alt={`img-${index}`}
                                        height={230}
                                        width={340}
                                        style={{ objectFit: "cover", height: "230px" , borderRadius : "8px" }} 
                                    />

                                </Grid>
                            ))}
                        </Grid>
                    }

                    <Stack direction={"row"} alignItems={"start"} justifyContent={"start"} gap={"12px"} marginTop={"16px"}>
                        <Image 
                            src={"./nav-icon/hard.svg"}
                            alt={"hard"}
                            width={20}
                            height={20}
                        />
                        <Image 
                            src={"./nav-icon/commite.svg"}
                            alt={"hard"}
                            width={20}
                            height={20}
                        />
                        <Image 
                            src={"./nav-icon/repost.svg"}
                            alt={"hard"}
                            width={20}
                            height={20}
                        />
                        <Image 
                            src={"./nav-icon/send.svg"}
                            alt={"hard"}
                            width={20}
                            height={20}
                        />
                    </Stack>
                    <Typography variant='body2' marginTop={"16px"} color='#00000061'>
                        {reposts} reposts - {comments} comments
                    </Typography>
                </Box>
            </Stack>
        </Card>
    )
}
