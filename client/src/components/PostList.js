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
            <h2 className="text-pink-500">{title}</h2>
            {posts &&
            posts.map((post) => (
                <div key={post._id} className="card mb-3 bg-zinc-400">
                    <h4 style={names} className="p-2 m-0 bg-zinc-800 text-green-400 flex justify-between">
                        {post.postAuthor}
                        <span style={{ fontSize: '50%' }}>
                            {post.createdAt}
                        </span>
                    </h4>
                    <div className="m-3 text-zinc-800">
                        <p>{post.postText}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}