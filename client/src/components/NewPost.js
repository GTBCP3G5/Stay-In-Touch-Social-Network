import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { ADD_POST } from "../utils/mutations";
import { QUERY_POSTS, QUERY_ME } from "../utils/queries";

import Auth from "../utils/auth";

export default function NewPost() {
	const [postText, setPostText] = useState("");

	const [addPost, { error }] = useMutation(ADD_POST, {
		update(cache, { data: { addPost } }) {
			try {
				const { posts } = cache.readQuery({ query: QUERY_POSTS });

				cache.writeQuery({
					query: QUERY_POSTS,
					data: { posts: [addPost, ...posts] },
				});
			} catch (e) {
				console.error(e);
			}

			// update me object's cache
			const { me } = cache.readQuery({ query: QUERY_ME });
			cache.writeQuery({
				query: QUERY_ME,
				data: { me: { ...me, posts: [...me.posts, addPost] } },
			});
		},
	});

	const handleFormSubmit = async (event) => {
		event.preventDefault();

		try {
			const { data } = await addPost({
				variables: {
					postText,
					postAuthor: Auth.getProfile().data.username,
				},
			});

			setPostText("");
		} catch (err) {
			console.error(err);
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		if (name === "postText" && value.length <= 280) {
			setPostText(value);
		}
	};

	return (
		<div className="container mx-auto bg-slate-800 rounded-xl shadow border p-8 m-10">
			<h1 className="text-2xl font-bold text-white">New Post</h1>
			{Auth.loggedIn() ? (
				<form className="mt-8 max-w-full" onSubmit={handleFormSubmit}>
					<div className="grid grid-cols-1 gap-6">
						<textarea
							name="postText"
							type="text"
							className="form-input mt-1 flex w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
							rows="6"
							value={postText}
							placeholder="Type your post here"
							onChange={handleChange}
						></textarea>
					</div>
					<div className="grid grid-cols-1 gap-6">
						<button
							className="bg-slate-500 hover:bg-sky-500 active:bg-lime-500"
							type="submit"
						>
							Add Post
						</button>
					</div>
					{error && (
						<div className="grid grid-cols-1 my-3 bg-red-700 text-white p-3">
							{error.message}
						</div>
					)}
				</form>
			) : (
				<p>
					You need to log in! Please <Link to="/login">login</Link> or{" "}
					<Link to="signup">signup.</Link>
				</p>
			)}
		</div>
	);
}
