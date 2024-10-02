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
    like: number
}

export const CommentCard = ({
    id,
    author,
    authorImg,
    content,
    like
}: props) => {
    const router = useRouter()
    return (
        <Card
            sx={{
                borderRadius: "0px",
                padding: "16px 18px 16px 18px",
                boxShadow : "none",
                borderBottom : "1.5px solid #E0E0E0"
            }}

            onClick={() => router.push(`/${id}`)}
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
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "end",
                                gap: "10px"
                            }}
                        >
                            <Typography variant='body2' sx={{ color: "#00000061", fontSize: "12px" }}>
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
                    <Stack direction={"row"} alignItems={"center"} justifyContent={"start"} gap={"12px"} marginTop={"16px"}>
                        <Typography variant='h4' fontSize={"13px"} >{like}</Typography>
                        <Image
                            src={"./color-hard.svg"}
                            alt={"hard"}
                            width={20}
                            height={20}
                        />
                    </Stack>
                </Box>
            </Stack>
        </Card>
    )
}
