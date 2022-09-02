import React from "react";
import { useQuery } from "@apollo/client";
import "../App.css";
import PostList from "../components/PostList";

import { QUERY_POSTS } from "../utils/queries";

export default function Home() {
    const normalKanit = {
        fontFamily: "'Kanit', sans-serif",
        fontWeight: "300"
    }

    const { loading, data } = useQuery(QUERY_POSTS);
    console.log(data);
	const posts = data?.posts || [];
    // console.log(this.posts)
	return (
        <div className='bg-zinc-700 flex items-stretch'>
		<div className="flex justify-center items-center row mt-5 sm:mt-5 md:mt-0 w-75">
			{/* Search Bar and Button */}
			<div className="input-group mb-4 mt-4 w-75">
				<input
					className="form-control px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
					placeholder="Search"
					aria-label="Search"
					aria-describedby="button-addon3"
                    style={normalKanit}
				/>
				<span className="input-group-btn h-8">
					<button
						className="btn btn-info px-6 py-2 border-2 bg-sky-500 border-sky-600 text-zinc-800 font-medium text-xs leading-tight uppercase rounded hover:bg-sky-400 hover:bg-opacity-2 focus:outline-none focus:ring-0 focus:bg-sky-600 transition duration-150 ease-in-out ml-3 h-12 material-symbols-outlined"
						type="button"
					>
						<span className="material-symbols-outlined">
							search
						</span>
					</button>
				</span>
			</div>
            <div className="flex justify-center items-end m-3">
                {loading ? (
                    <div>Loading...</div>
                ) : (
                <PostList 
                    posts={posts}
                    title="Check out the post feed!"
                />
                )}
            </div>
		</div>
        </div>
      </div>
    </div>
  );
}
