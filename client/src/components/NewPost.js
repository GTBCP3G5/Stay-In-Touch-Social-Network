import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { ADD_POST } from "../utils/mutations";
import { QUERY_POSTS, QUERY_ME } from "../utils/queries";

import Auth from "../utils/auth";

const NewPost = () => {
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

	// Styling
	const normalKanit = {
        fontFamily: "'Kanit', sans-serif",
        fontWeight: "200"
    }

	const boldKanit = {
        fontFamily: "'Kanit', sans-serif",
        fontWeight: "400",
        fontSize: "20px"
    }



	return (
		<div className="min-h-screen flex">
			<div className="bg-zinc-700 flex-grow">
				<div className="container mx-auto bg-zinc-800 rounded-xl shadow border p-8 sm-m-10 m-10 w-75">
					<h1 style={boldKanit} className="text-2xl font-bold text-green-400">New Post</h1>

					{Auth.loggedIn() ? (
						
						<form className="mt-8 max-w-75" onSubmit={handleFormSubmit}>
							<div className="grid grid-cols-1 gap-6 h-auto">
								<textarea
									name="postText"
									type="text"
									className="form-input mt-1 flex w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 h-40"
									rows="6"
									value={postText}
									placeholder="Type your post here"
									onChange={handleChange}
									style={normalKanit}
								></textarea>
							</div>
							<div className="grid grid-cols-1 gap-6">
								<button
									style={normalKanit}
									className="bg-sky-500 hover:bg-sky-400 active:bg-green-500 rounded-md text-white w-6/12 justify-self-center focus:bg-green-500 m-4 sm-w-40 lg-w-5 h-10"
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
		</div>
		</div>
	);
};

export default NewPost;
