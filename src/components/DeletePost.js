import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

const queryClient = new QueryClient();

export default function DeletePost({ id }) {
    return (
        <QueryClientProvider client={queryClient}>
            <RunDelete id={id}/>
        </QueryClientProvider>
    )
}

function RunDelete({ id }) {
    const navigate = useNavigate();

    const url = `https://us-central1-mbtcandidate.cloudfunctions.net/posts/jlear/${id}`;
    const { isLoading, error, data } = useQuery('deletePost', () => 
        fetch(url,{
            method: 'DELETE',
            //'Content-Type': 'application/x-www-form-urlencoded',
        }).then(res => res.json())
    );

    if (isLoading) return "Loading..."

    if(error) return `Error: ${error.message}`

    //If successfull navigate back to Home
    navigate('/');
}
