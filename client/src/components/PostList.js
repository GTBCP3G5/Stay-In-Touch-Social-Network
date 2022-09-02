import React, { useState } from 'react';
import { useMutation } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";
import { ADD_FRIEND } from '../utils/mutations';
import Auth from "../utils/auth"

export default function PostList({ posts, title }) {
    const [friend, setFriend] = useState("");

    const [addFriend, { error }] = useMutation(ADD_FRIEND, {
        update(cache, { data: { addFriend }}) {
            try {
                const { friends } = cache.readQuery({ query: QUERY_USER })

                cache.writeQuery({
                    query: QUERY_USER,
                    data: { friends: [addFriend, ...friends]}
                })
            } catch(e) {
                console.log(e)
            }
        }
    });

    const handleFormSubmit = async () => {
        try {
            const { data } = await addFriend({
                variables: {
                    friend,
                    username: Auth.getProfile().data.username,
                    email: Auth.getProfile().data.email
                }
            });
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === "username" && value.length <= 1) {
            setFriend(value);
        }
    }

    const boldKanit = {
        fontFamily: "'Kanit', sans-serif",
        fontWeight: "400",
        fontSize: "20px"
    }

    const normalKanit = {
        fontFamily: "'Kanit', sans-serif",
    }

    console.log(posts.length)
    if(!posts.length) {
        return <h2>No Posts Yet</h2>
    }

    return (
        <form className='w-75'>
            <h2 style={boldKanit} className="text-green-400">{title}</h2>
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
                    <div class="flex space-x-2 m-2">
                        <button type="submit" class="inline-block px-6 py-2.5 bg-sky-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-sky-400 hover:shadow-lg focus:bg-sky-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Add Friend</button>
                    </div>
                </div>
            ))}
        </form>
    )
}