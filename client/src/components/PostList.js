import React from 'react';

export default function PostList({ posts, title }) {
    const boldKanit = {
        fontFamily: "'Kanit', sans-serif",
        fontWeight: "400",
        fontSize: "20px"
    }

    const normalKanit = {
        fontFamily: "'Kanit', sans-serif",
        fontWeight: "200"
    }

    console.log(posts.length)
    if(!posts.length) {
        return <h2>No Posts Yet</h2>
    }

    return (
        <div className='w-75'>
            <h2 style={boldKanit} className="text-sky-500">{title}</h2>
            {posts &&
            posts.map((post) => (
                <div key={post._id} className="card mb-3 bg-zinc-200">
                    <h4 style={boldKanit} className="p-2 m-0 bg-zinc-800 text-green-400 flex justify-between">
                        {post.postAuthor}
                        <span style={{ fontSize: '75%' }}>
                            {post.createdAt}
                        </span>
                    </h4>
                    <div className="m-3 text-zinc-800">
                        <p style={normalKanit}>{post.postText}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}