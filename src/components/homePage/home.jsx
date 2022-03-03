import React, { Fragment, useContext } from "react";
import { Header,NavBar } from "./styledHome";
import {DataContext} from "../dataProvider";

function Home() {
  const { isAuth, handleLogout } = useContext(DataContext);
  
 
  const handleSignOut = () => {
    if (isAuth) {
      handleLogout()
    }
  }

	return (
		<Fragment>
			<Header>
				<div>Post App</div>
				<NavBar>
			{	isAuth &&	<div >Post</div>}
					<div onClick={handleSignOut}>{isAuth ? "Sign out" : "Sign in"}</div>
				</NavBar>
			</Header>
		</Fragment>
	);
}

export default Home;
