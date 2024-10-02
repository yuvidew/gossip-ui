import { NavBar } from "@/app/(home)/_components/NavBar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { ReactNode } from "react";
import { UserInfo } from "./_components/UserInfo";
import { Trending } from "./_components/Trending";

export default function HomeLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>){
    return(
        <Box>
            <NavBar/>
            <Box sx={{ width : '85%' , margin : "auto" , marginTop : "7rem"}}>
                <Stack 
                    direction={"row"} 
                    alignItems={"start"} 
                    justifyContent={"space-between"} 
                    gap={5}
                    marginTop={"16px"}
                >
                    <Box width={"20%"}>
                        <UserInfo/>
                    </Box>
                    <Box width={"60%"}>
                        {children}
                    </Box>
                    <Box width={"20%"}>
                        <Trending/>
                    </Box>
                </Stack>
            </Box >
        </Box>
    )
}