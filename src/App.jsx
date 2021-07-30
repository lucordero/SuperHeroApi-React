import React from "react";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Login from "./components/Login";
import Search from "./components/Search";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Router>
				<Menu />
				<Switch>
					<Route exact path="/" component={Home}></Route>{" "}
					{/*aca va a estar el equipo */}
					<Route path="/login" component={Login}></Route>
					<Route path="/search" component={Search}></Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
