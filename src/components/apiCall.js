import { useParams } from "react-router-dom";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

const queryClient = new QueryClient();

export default function apiCall() {
    return (
        <QueryClientProvider client={queryClient}>
            <testAPI/>
        </QueryClientProvider>
    )
}

function testAPI() {
    const {param} = useParams();
    const url = `https://dummyurl`;
    const { isLoading, error, data } = useQuery('testAPI', () => 
        fetch(url,{
            method: 'GET',
            'Content-Type': 'application/json'
        }).then(res => res.json())
    );

    if (isLoading) return "Loading..."

    if(error) return `Error: ${error.message}`

    return (
        <h2>Put data here</h2>
    )
}
