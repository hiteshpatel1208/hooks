import React, { useEffect, useState } from 'react'

export default function Datafetching1(props) {

    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState('');
    const [post, setPost] = useState({});

    useEffect(() => {
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts/1')
                .then(res => res.json()
                    .then(res => {
                        setLoading(false);
                        setPost(res);
                        setErr('');
                    })
                    .catch(err => {
                        setLoading(false);
                        setPost({});
                        setErr('Something went wrong!');
                        console.log(err);
                    }))
        }, 2000);
    }, []);

    return (
        <>
            <h4>Data Fetching without useReducer</h4>
            <p>
                {loading ? 'Loading...' : post.title}
                {err ? err : null}
            </p>
        </>
    )
}
