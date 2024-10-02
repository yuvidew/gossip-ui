"use client"

import React from 'react'
import Stack from '@mui/material/Stack'
import Avatar from '@mui/material/Avatar'
import Badge from '@mui/material/Badge'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import styled from '@emotion/styled';

const SmallAvatar = styled(Avatar)(() => ({
    width: 22,
    height: 22,
}));


export const UserInfo = () => {
    return (
        <Stack direction={"column"} gap={"16px"} alignItems={"start"} width={"100%"}>
            <Badge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' , }}
                badgeContent={
                    <SmallAvatar alt="verified" src="./nav-icon/verified.svg" />
                }
            >
                <Avatar
                    alt="user"
                    src="https://s3-alpha-sig.figma.com/img/601d/41d4/3bb6e2c374c2023c0b957fdae4aa5d04?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bYgBU7DDUunacz~hX8~N1BWko~ho-3aX~rRB7HLwBW~jqk5jCIgOonKDtfddRxlZOoPxfMVOz3Nuj6a3H9VV0FrZ7zdxCiFnhIiLJo9hy3fpWv0wVUo6DuLVopBuralg09Z7nVMJ9w5PH6~XF9fJltMbffgPAHNPNIsqCagSKpXoWkX0Ec0aW22ENHkUxgMWYfU6b-xIYqz~EgpcuRDHtakDh8PNUGPiPgyFL7hpqwHX4k4vGqcGPfV9f2aM6ZQQxiOryaqTA~1MrzzFIEZ5qDOrQGI7obub~WmxqSsPGSfmd57ST5VhCSi00XjBx2kS4OZatUy7~c1VDjxpTQcK3g__"
                    sx={{ width: "64px", height: "64px" }}
                />
            </Badge>

            <Typography variant='h1' sx={{
                fontSize : "20px",
                fontWeight : 700
            }} >
                Deepak Yadu
            </Typography>

            <Typography variant='body1'  >
                e2ddea5ed36f <Button sx={{borderRadius : "48px" , textTransform : "lowercase"}} >threads.net</Button>
            </Typography>

            <Typography variant='body1' sx={{fontSize : "15px"}} >
                Senior Frontend Developer | Exploring the art of programming
                deepak@newklio.com
            </Typography>
            <Typography variant='body2' sx={{fontSize : "14px" , display : "flex" , alignItems : "center" , gap : "3px" , textTransform : "uppercase" , color : "#00000099"}}>
                2957 followers - 456 following
            </Typography>
        </Stack>
    )
}
