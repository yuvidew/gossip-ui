"use client"

import Box  from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import data from "../data.json"
import Image from "next/image";
import { CommentCard } from "./_components/CommentCard";
import { useRouter } from "next/navigation";

interface props {
    params: { [key: string]: string };
}

export default function PostPage({ params: { id } }: props) {
    const router = useRouter();
    let post = data.filter((ele) => ele.id == Number(id))[0];

    return (
        <Box>
            <Typography  variant="h2"  >
                <ArrowBackIcon onClick = {() => router.push("/")} sx={{cursor : "pointer"}} /> Gossip Topic
            </Typography>
            <Card
                sx={{
                    padding: "16px",
                    marginTop: "16px",
                    borderRadius: "16px",
                    marginBottom : "2rem"
                }}
            >
                <Stack
                    direction={"row"}
                    gap="16px"
                    alignItems={"start"}
                >

                    <Box>
                        <Avatar
                            alt="user"
                            src={post.authorImg}
                            sx={{ width: "36px", height: "36px" }}
                        />
                    </Box>
                    <Box width={"100%"}>
                        <Stack direction={"row"} alignItems={"start"} justifyContent={"space-between"}  >
                            <Typography variant='h4' >
                                {post.author}
                            </Typography>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "end",
                                    gap: "10px"
                                }}
                            >
                                <Typography variant='p4'>
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

                        <Typography variant='p1'>
                            {post.content}
                        </Typography>
                        {post.img.length !== 0 &&
                            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} marginY={"16px"}>
                                {post.img.map((ele, index) => (
                                    <Grid item xs={6} key={index} padding={"0"}>
                                        <Image
                                            src={ele}
                                            alt={`img-${index}`}
                                            height={230}
                                            width={340}
                                            style={{ objectFit: "cover", height: "230px", borderRadius: "8px" }}
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
                            {post.reposts} reposts - {post.comments} comments
                        </Typography>

                        <Stack
                            direction={"column"}
                            alignItems={"start"}
                            gap={"16px"}
                            marginTop={"16px"}
                        >
                            <Box
                                sx={{
                                    width: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                    borderRadius: "999px",
                                    border: "1px solid",
                                    borderColor: "#BDBDBD",
                                    padding: "4px",
                                    gap: "16px"
                                }}
                            >
                                <Avatar
                                    src={"https://s3-alpha-sig.figma.com/img/601d/41d4/3bb6e2c374c2023c0b957fdae4aa5d04?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bYgBU7DDUunacz~hX8~N1BWko~ho-3aX~rRB7HLwBW~jqk5jCIgOonKDtfddRxlZOoPxfMVOz3Nuj6a3H9VV0FrZ7zdxCiFnhIiLJo9hy3fpWv0wVUo6DuLVopBuralg09Z7nVMJ9w5PH6~XF9fJltMbffgPAHNPNIsqCagSKpXoWkX0Ec0aW22ENHkUxgMWYfU6b-xIYqz~EgpcuRDHtakDh8PNUGPiPgyFL7hpqwHX4k4vGqcGPfV9f2aM6ZQQxiOryaqTA~1MrzzFIEZ5qDOrQGI7obub~WmxqSsPGSfmd57ST5VhCSi00XjBx2kS4OZatUy7~c1VDjxpTQcK3g__"}
                                    sx={{ width: "36px", height: "36px" }}
                                    alt={"user"}
                                />

                                <TextField
                                    fullWidth
                                    placeholder="Send your thoughts.."
                                    size="small"
                                    variant="standard" 
                                    sx={{
                                        "& .MuiInput-underline:before": {
                                            borderBottom: "none", 
                                        },
                                        "& .MuiInput-underline:hover:before": {
                                            borderBottom: "none", 
                                        },
                                        "& .MuiInput-underline:after": {
                                            borderBottom: "none", 
                                        }
                                    }}
                                />
                                
                                    <Button 
                                        sx={{
                                            bgcolor : "#212121",
                                            borderRadius : "999px",
                                            color : "#fff",
                                            paddingX : "8px",
                                            textTransform : "capitalize"
                                        }}
                                    >
                                        Post
                                    </Button>
                            </Box>
                            {post.comment.length !== 0 && 
                                post.comment.map((ele) => (
                                    <CommentCard
                                        key={ele.id}
                                        id={ele.id}
                                        author={ele.author}
                                        authorImg={ele.authorImg}
                                        like={ele.like}
                                        content={ele.content}

                                    />
                                ))
                            }
                        </Stack>

                    </Box>
                </Stack>

            </Card>
        </Box>
    )
}