import React, { useReducer, useEffect } from 'react'

const initialState = {
    loading: true,
    post: {},
    err: ''
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return { loading: false, post: action.payload, err: '' }
        case 'FETCH_ERROR':
            return { loading: false, post: {}, err: 'Something went wrong' }
        default:
            return state
    }
}

export default function Datafetching2(props) {

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts/1')
                .then(res => res.json()
                    .then(res => {
                        dispatch({ type: 'FETCH_SUCCESS', payload: res })
                    })
                    .catch(err => {
                        dispatch({ type: 'FETCH_ERROR' })
                    }))
        }, 2000);
    }, []);

    return (
        <>
            <h4>Data Fetching with useReducer</h4>
            <p>
                {state.loading ? 'Loading...' : state.post.title}
                {state.err ? state.err : ''}
            </p>
        </>
    )
}
