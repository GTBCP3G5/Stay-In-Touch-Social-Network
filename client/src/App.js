import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Login from "./components/Login";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Friends from "./components/Friends";
import Favorites from "./components/Favorites";
import NewPost from "./components/NewPost";

const httpLink = createHttpLink({
	uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
	const token = localStorage.getItem('id_token');
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : '',
		},
	};
});

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
  });

function App() {
	return (
		<ApolloProvider client={client}>
			<Router>
				<>
					<Navbar />
					<Routes>
						<Route
							path="/"
							element={<Login />}
						/>
						<Route
							path="/login"
							element={<Login />}
						/>
						<Route
							path="/register"
							element={<Register />}
						/>
						<Route
							path="/home"
							element={<Home />}
						/>
						<Route
							path="/create_post"
							element={<NewPost />}
						/>
						<Route
							path="/friends"
							element={<Friends />}
						/>
						<Route
							path="/favorites"
							element={<Favorites />}
						/>
					</Routes>
					<Footer />
				</>
			</Router>
		</ApolloProvider>
	);
}

export default App;
