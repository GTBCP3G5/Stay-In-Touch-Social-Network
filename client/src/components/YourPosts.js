import React from "react";
import { Navigate, useParams, Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

import NewPost from "./NewPost";
import PostListUtil from "../utils/profileListUtil";

import { QUERY_ME, QUERY_USER } from "../utils/queries";

import Auth from "../utils/auth";

const YourPosts = () => {
	const boldKanit = {
		fontFamily: "'Kanit', sans-serif",
		fontWeight: "400",
		fontSize: "20px",
	};

	const { username: userParam } = useParams();

	const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
		variables: { username: userParam },
	});

	const user = data?.me || data?.user || {};

	// target own posts
	if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
		return <Navigate to="/me" />;
	}

	if (loading) {
		return <div>Loading...</div>;
	}

	if (!user?.username) {
		return <div>These are not your posts!</div>;
	}

	return (
		<div className="min-h-screen flex">
			<div className="bg-zinc-700 flex-grow">
				<div className="container mx-auto p-8 sm-m-10 w-75">
					<h2 style={boldKanit} className="text-sky-500 p-1">
						Viewing Your Posts
					</h2>

					<PostListUtil posts={user.posts} />

					<div className="flex justify-center bg-zinc-800 rounded-lg shadow border hover:bg-sky-400 active:bg-green-500">
						<Link className="text-white " to="/create_post">
							CLICK HERE TO ADD A NEW POST
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default YourPosts;
