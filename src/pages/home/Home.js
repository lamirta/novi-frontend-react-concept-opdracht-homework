import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './Home.css';

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
        <>
            <h1>Home Page</h1>
            {posts && posts.map((banana) =>
            {return (<li key={banana.data.id}>
                <h3><a href={banana.data.url} target="">{banana.data.title}</a></h3>
                        {banana.data.title}

                </li>)
            })}
        </>
    );
}

export default Home;