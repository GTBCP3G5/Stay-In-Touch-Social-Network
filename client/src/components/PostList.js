import React from 'react';

export default function PostList({ posts, title }) {
    console.log(posts.length)
    if(!posts.length) {
        return <h2>No Posts Yet</h2>
    }

    return (
        <div>
            <h2>{title}</h2>
            {posts &&
            posts.map((post) => (
                <div key={post._id} className="card mb-3">
                    <h4 className="p-2 m-0">
                        {post.postAuthor} <br />
                        <span style={{ fontSize: '1rem' }}>
                            added this post on {post.createdAt}
                        </span>
                    </h4>
                    <div>
                        <p>{post.postText}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}