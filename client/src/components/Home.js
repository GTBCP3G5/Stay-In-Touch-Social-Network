import React from 'react';
import { useQuery } from "@apollo/client";

import PostList from "../components/PostList";

import { QUERY_POSTS } from "../utils/queries";

export default function Home() {
	const { loading, data } = useQuery(QUERY_POSTS);
    console.log(data);
	const posts = data?.posts || [];
    // console.log(this.posts)
	return (
		// <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
		<div className="flex justify-center items-center row mt-5 sm:mt-5 md:mt-0">
			{/* Search Bar and Button */}
			<div className="input-group mb-4 mt-4 w-75">
				<input
					className="form-control min-w-50 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
					placeholder="Search"
					aria-label="Search"
					aria-describedby="button-addon3"
				/>
				<span className="input-group-btn h-8">
					<button
						className="btn btn-info px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out ml-3 h-12 material-symbols-outlined"
						type="button"
					>
						<span className="material-symbols-outlined">
							search
						</span>
					</button>
				</span>
			</div>
            <div className="flex justify-center items-end">
                {loading ? (
                    <div>Loading...</div>
                ) : (
                <PostList 
                    posts={posts}
                    title="Checkout the post feed!"
                />
                )}
            </div>
		</div>
	);
}
