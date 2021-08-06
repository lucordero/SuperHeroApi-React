import React, { useState, useCallback } from "react";
import SignupForm from "./components/Login";

function App() {
	const [tokenLogin, setTokenLogin] = useState(null);
	// localStorage.removeItem("userLogin");
	useCallback(() => {
		setTokenLogin(localStorage.getItem("userLogin"));
	});

	const logOut = () => {
		console.log("Me desloguie");
		localStorage.removeItem("userLogin");
		setTokenLogin(null);
	};
	return (
		<div className="App">
			{tokenLogin ? (
				<div className="navbar navbar-expand-lg navbar-dark">
					<div className="container-fluid justify-content-start">
						<button className="btn btn-danger m-1" onClick={logOut}>
							Cerrar Sesion
						</button>
					</div>
				</div>
			) : (
				<div>
					<SignupForm />
				</div>
			)}

			<div className="container"></div>
		</div>
	);
}

export default App;
