import { Button } from "@mui/material";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import BlogPost from "./BlogPost";

const queryClient = new QueryClient();

export default function Home() {
    return (
        <QueryClientProvider client={queryClient}>
            <GetPosts/>
        </QueryClientProvider>
    )
}

function GetPosts() {
    const navigate = useNavigate();
    const url = 'https://us-central1-mbtcandidate.cloudfunctions.net/posts/jlear';
    const { isLoading, error, data } = useQuery('getPosts', () => 
        fetch(url,{
            method: 'GET',
            'Content-Type': 'application/json'
        }).then(res => res.json())
    );

    if (isLoading) return "Loading..."

    if(error) return `Error: ${error.message}`

    console.log('get data returned')
    console.log(data);

    if(!data.response) return 'No Data Found'
    
    return (
      <div style={{'marginTop': '100px'}}>
        <Button onClick={() => navigate('createPost')} variant="contained" color="primary">New Post</Button>
        {data.response.map(element => {
            return <BlogPost post={element}/>
        })}
      </div>
    )
}