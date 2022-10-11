import { Button, Grid, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import CreatePostAPI from './CreatePostAPI';

export default function CreatePost() {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();

    if( submitted ) {
        return <CreatePostAPI title={title} text={text}/>
    }
    
  return (
    <div>
        <h2>Creating a new Blog Post</h2>
        <form onSubmit={() => setSubmitted(true)}>
            <Grid container>
                <Grid item xs={4}>
                    <h3>Title:</h3>
                </Grid>
                <Grid item xs={8}>
                    <TextField id="post-title" onChange={e => {setTitle(e.target.value)}} label="Title" variant="outlined"/>
                </Grid>
                <Grid item xs={4}>
                    <h3>Text:</h3>
                </Grid>
                <Grid item xs={8}>
                    <TextField id="post-text" multiline onChange={e => {setText(e.target.value)}} label="Text" variant="outlined"/>
                </Grid>
                <Grid item xs={6}>
                    <Button variant="contained" color="primary" type="submit">Submit</Button>
                </Grid>
            </Grid>
        </form>
    </div>
  )
}
