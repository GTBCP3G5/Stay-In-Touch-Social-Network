import React from "react";

const PostList = ({ posts }) => {
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
						<div className="m-3 text-zinc-800">
							<p style={normalKanit}>{post.postText}</p>
						</div>
					</div>
				))}
		</div>
	);
};

export default PostList;
