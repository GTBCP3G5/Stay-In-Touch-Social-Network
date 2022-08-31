import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { InMemoryCache, ApolloClient, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import Friends from "./components/Friends";
import Favorites from "./components/Favorites";
import NewPost from "./components/NewPost";

const client = new ApolloClient({
	uri: '/',
	cache: new InMemoryCache(),
  });

function App() {
	return (
		<ApolloProvider client={client}>
			<Router>
				<Navbar />
				<Routes>
					<Route
					path="/"
					element={<Home />}
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
			</Router>
		</ApolloProvider>
	);
}

export default App;
