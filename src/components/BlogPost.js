import { Card, CardContent, CardHeader, IconButton } from '@mui/material'
import Parser from 'html-react-parser';
import DeleteIcon from '@mui/icons-material/Delete';
import { Navigate, useNavigate } from 'react-router-dom';

/**
 * Takes in a Blog Post object and renders it
 * @param {Blog Post Data} BlogPostData 
 * @returns 
 */
export default function BlogPost({ post }) {
    const navigate = useNavigate();
    const handleDelete = () => {
        navigate(`delete/${post.id}`);
    };
  return (
    <Card>
        <CardContent>
            <CardHeader title={post.timestamp} action={<IconButton aria-label="delete" onClick={handleDelete}><DeleteIcon/></IconButton>}/>
            <h2>{post.title}</h2>
            <p>{Parser(post.text)}</p>
        </CardContent>
    </Card>
  )
}
