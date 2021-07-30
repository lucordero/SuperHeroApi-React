import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useHistory } from "react-router-dom";

const SignupForm = () => {
	const historial = useHistory();
	const [msgError, setMsgError] = useState(null);

	// Pass the useFormik() hook initial form values and a submit function that will
	// be called when the form is submitted
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		onSubmit: async (values) => {
			await axios
				.post("http://challenge-react.alkemy.org/", {
					email: formik.values.email,
					password: formik.values.password,
				})
				.then(() => {
					setMsgError(null);
					alert("Sesión iniciada correctamente.");

					historial.push("/");
				})
				.catch((err) => {
					setMsgError("Usuario o contraseña incorrectas.");
				});
			if (formik.values.email === "") {
				setMsgError(null);
				setMsgError("Debe ingresar un usuario.");
			}
			if (formik.values.password === "") {
				setMsgError(null);
				setMsgError("Debe ingresar una contraseña.");
			}
		},
	});
	return (
		<div className="row mt-5">
			<div className="col"></div>
			<div className="col">
				<form className="form-group" onSubmit={formik.handleSubmit}>
					<input
						className="form-control mb-3"
						id="email"
						name="email"
						type="email"
						placeholder="Email"
						onChange={formik.handleChange}
						value={formik.values.email}
					/>

					<input
						className="form-control"
						id="password"
						name="password"
						type="password"
						placeholder="Password"
						onChange={formik.handleChange}
						value={formik.values.pass}
					/>
					<div className="d-grid mt-3">
						<button className="btn btn-dark" type="submit">
							Log In
						</button>
					</div>
				</form>
				{msgError != null ? (
					<div className="mt-3 alert alert-danger"> {msgError}</div>
				) : (
					<span></span>
				)}
			</div>
			<div className="col"></div>
		</div>
	);
};
export default SignupForm;
