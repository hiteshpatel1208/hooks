import React, { useEffect, useState } from 'react'

export default function Datafetching(props) {

    const [post, setPost] = useState({});
    const [posts, setPosts] = useState([]);
    const [id, setId] = useState(1);
    const [idFromBtn, setIdFromBtn] = useState(1);

    const handleClick = (e) => {
        e.preventDefault();
        setIdFromBtn(id);
    }

    //getting all posts on load
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json().then(res => setPosts(res)).catch(err => console.error(err)));
    }, []);

    // fetching post based on id
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${idFromBtn}`)
            .then(res => res.json().then(res => setPost(res)).catch(err => console.error(err)));
    }, [idFromBtn]);


    return (
        <>
            <h4>Data Fetching Example</h4>
            <form>
                <input type='text' value={id} onChange={e => setId(e.target.value)} />
                <button type="submit" onClick={e => handleClick(e)}>Fetch</button>
            </form>
            <p>{post.title}</p>
            <ul>
                {
                    posts.map((post) => {
                        return <li key={post.id}>{post.title}</li>
                    })
                }
            </ul>
        </>
    )
}
