import React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import IconButton  from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import TextField  from '@mui/material/TextField'
import Image from 'next/image'

export const PostInputFiled = () => {
    return (
        <Card
            sx={{
                borderRadius: "16px",
                padding: "16px 18px 16px 18px"
            }}
        >
            <Stack
                direction={"row"}
                gap="16px"
            >
                <Box>
                    <Avatar
                        alt="user"
                        src="https://s3-alpha-sig.figma.com/img/601d/41d4/3bb6e2c374c2023c0b957fdae4aa5d04?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bYgBU7DDUunacz~hX8~N1BWko~ho-3aX~rRB7HLwBW~jqk5jCIgOonKDtfddRxlZOoPxfMVOz3Nuj6a3H9VV0FrZ7zdxCiFnhIiLJo9hy3fpWv0wVUo6DuLVopBuralg09Z7nVMJ9w5PH6~XF9fJltMbffgPAHNPNIsqCagSKpXoWkX0Ec0aW22ENHkUxgMWYfU6b-xIYqz~EgpcuRDHtakDh8PNUGPiPgyFL7hpqwHX4k4vGqcGPfV9f2aM6ZQQxiOryaqTA~1MrzzFIEZ5qDOrQGI7obub~WmxqSsPGSfmd57ST5VhCSi00XjBx2kS4OZatUy7~c1VDjxpTQcK3g__"
                        sx={{ width: "36px", height: "36px" }}
                    />
                </Box>
                <Box width={"100%"}>
                    <TextField
                        size="small"
                        sx={{
                            "&.MuiInput-underline:before": {
                                borderBottom: "none", 
                            },
                            "&.MuiInput-underline:hover:before": {
                                borderBottom: "none",
                            },
                            "&.MuiInput-underline:after": {
                                borderBottom: "none", 
                            }
                        }}
                        placeholder='Share something cool today'
                    />

                    <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} marginTop={"16px"}>
                        <Image
                            src={"./link.svg"}
                            alt="link"
                            width={24}
                            height={24}
                        />
                        <IconButton size="medium">
                            <Image
                                src={"./nav-icon/send-desable.svg"}
                                alt="link"
                                width={16}
                                height={16}
                            />
                        </IconButton>
                    </Stack>
                </Box>
            </Stack>
        </Card>
    )
}
