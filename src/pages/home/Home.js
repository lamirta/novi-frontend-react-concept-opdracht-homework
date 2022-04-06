import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './Home.css';
import {Link} from "react-router-dom";

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get('https://www.reddit.com/hot.json?limit=15');
                console.log(result.data)
                setPosts(result.data.data.children);

            } catch(e) {
                console.error(e);
            }
        }
        fetchData(posts);
    }, []);


    return (
        <main className="main">
            <h1 className="title">Hottest posts
                <br/>
            <span className="span">on Reddit right now</span>
            </h1>
            <section className="section">
            {posts && posts.map((banana) =>
            {return (<article className="sub-section" key={banana.data.id}>
                <h2><a href={banana.data.url} target="">{banana.data.title}</a></h2>
                <div className="meta">
                    <p className="r-link"><Link to={`/subreddit/${banana.data.subreddit}`} >r/{banana.data.subreddit}</Link></p>
                    <p>Comments ## - Ups ##</p>
                </div>
                </article>)
            })}
            </section>
        </main>
    );
}

export default Home;