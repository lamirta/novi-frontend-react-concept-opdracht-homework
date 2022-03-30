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
            const result = await axios.get(`https://www.reddit.com/r/memes/about.json`);
            console.log(result.data)
            setPost(result.data);

        } catch (e) {
            console.error(e);
        }
    }
    fetchData(post);
    }, []);

    // hieronder nog uitzoeken hoe ik de data laat zien op de pagina..
    // met allen {post} vliegt ie eruit.

    return (
        <>
            <h1>Deze pagina gaat over {subredditId}</h1>
            <p>Deze subreddit post</p>
            <button><Link to="/">Take me back</Link></button>
        </>
    );
};

export default Subreddit;