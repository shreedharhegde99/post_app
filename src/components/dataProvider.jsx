import React, {  createContext, Component } from "react";
import axios from "axios";

const DataContext = createContext();

class DataProvider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isAuth: false,
			error: false,
			data: ["hello world"],
		};
		this.handleLogin = this.handleLogin.bind(this);
		this.handleLogout = this.handleLogout.bind(this);
	}
	// eve.holt@reqres.in",
	// "password": "cityslicka"
handleLogin(email, password) {
		axios
			.post("https://reqres.in/api/login", {
				email: email,
				password,
			})
			.then(() => this.setState({ isAuth: true }))
			.catch((err) => this.setState({ err: true }));
}
  handleLogout() {
    this.setState({isAuth:false})
  }

	render() {
    const { isAuth, data,error } = this.state;
    const { handleLogin, handleLogout } = this;
		const value = { isAuth, error, data, handleLogin, handleLogout };
		return (
			<DataContext.Provider value={value}>
				{this.props.children}
			</DataContext.Provider>
		);
	}
}

export default DataProvider;
export { DataContext };
