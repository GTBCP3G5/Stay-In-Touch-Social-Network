import React from 'react';

export default function PostList({ posts, title }) {
    const names = {
        fontSize: "20px"
    }

    console.log(posts.length)
    if(!posts.length) {
        return <h2>No Posts Yet</h2>
    }

    return (
        <div className='w-75'>
            <h2>{title}</h2>
            {posts &&
            posts.map((post) => (
                <div key={post._id} className="card mb-3 bg-slate-200">
                    <h4 style={names} className="p-2 m-0 bg-slate-800 text-white flex justify-between">
                        {post.postAuthor}
                        <span style={{ fontSize: '50%' }}>
                            {post.createdAt}
                        </span>
                    </h4>
                    <div className="m-3 text-slate-800">
                        <p>{post.postText}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}