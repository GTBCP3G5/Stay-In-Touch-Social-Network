import React from "react";
import { useMutation } from "@apollo/client";
import { DELETE_POST } from "./mutations";

const PostList = ({ posts }) => {
	const [removePost, { error }] = useMutation(DELETE_POST);

	const handleDelete = async (event) => {
		event.preventDefault();

		try {
			const {data} = await removePost({
				variables: {
					
				},
			});
		} catch (err) {
			console.error(err);
		}
	};

	const boldKanit = {
		fontFamily: "'Kanit', sans-serif",
		fontWeight: "400",
		fontSize: "20px",
	};

	const normalKanit = {
		fontFamily: "'Kanit', sans-serif",
	};

	if (!posts.length) {
		return <h3>No Posts Yet</h3>;
	}

	return (
		<div>
			{posts &&
				posts.map((post) => (
					<div key={post._id} className="card mb-3 bg-zinc-200">
						<h4
							style={boldKanit}
							className="p-2 m-0 bg-zinc-800 text-green-400 flex justify-between"
						>
							<span style={{ fontSize: "75%" }}>
								You posted this on {post.createdAt}
							</span>
						</h4>
						<div className="inline-flex m-3 text-zinc-800">
							<p style={normalKanit}>{post.postText}</p>
						</div>
						<button
							type="button"
							name={post._id}
							onClick={handleDelete}
							className="w-8 mx-3 mb-2 border border-black outline outline-2 rounded"
						>
							<span className="material-icons inline-flex">
								delete
							</span>
						</button>
					</div>
				))}
		</div>
	);
};

export default PostList;
