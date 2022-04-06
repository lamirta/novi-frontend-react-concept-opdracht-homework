import React, {useEffect, useState} from 'react';
import './Subreddit.css';
import {Link} from 'react-router-dom';
import {useParams} from "react-router-dom";
import axios from "axios";

function Subreddit() {
    const {subredditId} = useParams();
    const [post, setPost] = useState([]);

    // Get request naar backend waarin info over Id staat.
    useEffect(() => {
    async function fetchData() {
        try {
            const result = await axios.get(`https://www.reddit.com/r/${subredditId}/about.json`);
            console.log(result.data)
            setPost(result.data);

        } catch (e) {
            console.error(e);
        }
    }
    fetchData();
    }, []);

    return (
        <>
            {Object.keys(post).length > 0 && <article>
                <h1>Title {subredditId}</h1>
                <p>{post.data.title}</p>
                <h1>Description</h1>
                <p>{post.data.public_description}</p>
                <h1>Number of subscribers:</h1>
                <p>{post.data.subscribers}</p>
            </article>
            }
            <button><Link to="/">Take me back</Link></button>
        </>
    );
}

export default Subreddit;