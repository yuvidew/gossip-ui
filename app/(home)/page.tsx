import Stack from "@mui/material/Stack";
import { PostInputFiled } from "./_components/PostInputFiled";
import { PostCard } from "./_components/PostCard";
import data from "./data.json"

export default function Home() {
    return (
        <Stack direction={"column"} gap={"16px"} paddingBottom={"5px"}>
            <PostInputFiled/>
            {data.map((ele) => (
                <PostCard 
                    key={ele.id}
                    id={ele.id}
                    author={ele.author}
                    authorImg={ele.authorImg}
                    content={ele.content}
                    img={ele.img}
                    reposts={ele.reposts}
                    comments={ele.comments}
                />
            ))}
        </Stack>
    );
}