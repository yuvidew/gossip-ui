"use client"

import { InputFiled } from "@/components/InputFiled";
import Stack from "@mui/material/Stack";
import { Key, Mail } from '@mui/icons-material';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import Link from "next/link";
import Button from '@mui/material/Button';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import IconButton from '@mui/material/IconButton';
import Image from 'next/image';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useRouter } from "next/navigation";


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function SignUpHome() {
    const router = useRouter()
    return (
        <Stack
            direction={"column"}
            width={"400px"}
            margin={"auto"}
            gap={"48px"}
        >
            <InputFiled
                type={"text"}
                label='Full name'
                icon={<AccountCircleIcon />}
                placeholder='Enter your full name..'
            />

            <InputFiled
                type={'email'}
                label='Email'
                icon={<Mail />}
                placeholder='Enter your email..'
            />

            <InputFiled
                type={"password"}
                label='Password'
                icon={<Key />}
                placeholder='Enter your password..'
            />

            <Stack direction={"row"} alignItems={"center"} justifyContent={"start"} style={{ marginTop: ".7rem" }} >
                <Checkbox {...label} />
                <Typography sx={{ fontSize: ".9rem" }}>I agree to all <Link href={"#"} style={{color : "#1571c2"}}>Terms & condition</Link></Typography>
            </Stack>

            <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"center"}
                gap={"1rem"}
            >
                <Button
                    variant="contained"
                    endIcon={<ChevronRightIcon />}
                    sx={{
                        borderRadius: "2rem",
                        paddingX: "1.5rem",
                        width: "217px"
                    }}
                >
                    LOG IN
                </Button>
                <Typography variant='h1' component={"h1"}
                    sx={{ fontSize: "1rem", fontWeight: "bold", color: "#88898a" }}
                >
                    OR
                </Typography>
                <IconButton aria-label="google" size="small" >
                    <Image
                        src={"./google.svg"}
                        alt='google'
                        width={25}
                        height={25}
                    />
                </IconButton>
                <IconButton aria-label="github" size="small" >
                    <Image
                        src={"./github.svg"}
                        alt='github'
                        width={25}
                        height={25}
                    />
                </IconButton>
            </Stack>

            <Typography
                sx={{ textAlign: "center", fontSize: ".9rem", color: "#88898a" }}
            >
                Already have an account? <Typography variant="button" sx={{cursor : "pointer"}} onClick = {() => router.push("/login")} style={{color : "#1571c2"}} >Login</Typography> 
            </Typography>
        </Stack>
    );
}
