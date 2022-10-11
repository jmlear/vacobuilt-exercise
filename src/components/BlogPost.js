import { Card, CardContent } from '@mui/material'
import React from 'react'

/**
 * Takes in a Blog Post object and renders it
 * @param {Blog Post Data} BlogPostData 
 * @returns 
 */
export default function BlogPost({ post }) {
    console.log(post.id)
    console.log(post.text)
  return (
    <Card>
        <CardContent>
            <p>{post.timestamp}</p>
            <h2>{post.title}</h2>
            <p>{post.text}</p>
        </CardContent>
    </Card>
  )
}
