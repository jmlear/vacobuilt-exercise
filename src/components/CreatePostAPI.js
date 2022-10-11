import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

const queryClient = new QueryClient();

export default function CreatePostAPI({ title, text }) {
    return (
        <QueryClientProvider client={queryClient}>
            <RunQuery title={title} text={text}/>
        </QueryClientProvider>
    )
}

function RunQuery({ title, text }) {
    const navigate = useNavigate();
    const postData = {
        'title': title,
        'text': text,
        'timestamp':123
    };

    const url = `https://us-central1-mbtcandidate.cloudfunctions.net/posts/jlear`;
    const { isLoading, error, data } = useQuery('createPost', () => 
        fetch(url,{
            method: 'POST',
            'Content-Type': 'application/json',
            body: JSON.stringify(postData)
        }).then(res => res.json())
    );

    if (isLoading) return "Loading..."

    if(error) return `Error: ${error.message}`

    //If successfull navigate back to Home
    navigate('/');
}
