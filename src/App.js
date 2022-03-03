import Home from "./components/homePage/home";
import Login from "./components/loginPage/login";
import Post from "./components/postsPage/posts";

import { DataContext } from "./components/dataProvider";
import React, { useContext } from "react";

function App() {
	const { isAuth } = useContext(DataContext);
	return (
		<div>
			<Home />
			{isAuth ? <Post /> : <Login />}
		</div>
	);
}

export default App;
