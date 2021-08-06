import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import axios from "axios";

const SignupForm = () => {
	const [msgError, setMsgError] = useState(null);

	// Pass the useFormik() hook initial form values and a submit function that will
	// be called when the form is submitted
	return (
		<div className="row mt-5">
			<div className="col"></div>
			<div className="col">
				<Formik
					initialValues={{
						email: "",
						password: "",
					}}
					onSubmit={async (values) => {
						if (values.email === "") {
							setMsgError(null);
							setMsgError("Debe ingresar un usuario.");
						} else if (values.password === "") {
							setMsgError(null);
							setMsgError("Debe ingresar una contraseña.");
						} else {
							await axios
								.post("http://challenge-react.alkemy.org/", {
									email: values.email,
									password: values.password,
								})
								.then((resp) => {
									setMsgError(null);
									localStorage.setItem("userLogin", resp.data.token);
									alert("Sesión iniciada correctamente.");
								})
								.catch(() => {
									setMsgError("Usuario o contraseña incorrectas.");
								});
						}
					}}
				>
					{({ isSubmitting }) => (
						<Form className="form-group">
							<Field
								className="form-control mb-3"
								name="email"
								placeholder="Ponga su Email"
								type="email"
							/>

							<Field
								className="form-control mb-3"
								name="password"
								placeholder="Ponga su password"
								type="password"
							/>
							<div className="d-grid mt-3">
								<button
									className="btn btn-dark"
									type="submit"
									disabled={isSubmitting}
								>
									Submit
								</button>
							</div>
						</Form>
					)}
				</Formik>

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
