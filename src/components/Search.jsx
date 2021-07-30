import React, { useState } from "react";
import axios from "axios";
import Card from "./Card";
import Error from "./Error";

const Search = () => {
	const [id, setId] = useState(1); //lo saco del formik
	const [name, setName] = useState(""); //lo saco del formik
	const [hero, setHero] = useState({ response: "error" }); //lo saco de la api busqueda por id
	const [heroes, setHeroes] = useState([]); //lo saco de la api busqueda por nombre
	const [buscarxId, setBuscarxId] = useState(true);

	const getHero = (e) => {
		axios
			.get(`https://superheroapi.com/api.php/4538936262791718/${id}`)
			.then((resp) => {
				setHero(resp.data);
			})
			.catch(<Error></Error>);
		e.preventDefault();
	};
	const getHeroes = (e) => {
		axios
			.get(`https://superheroapi.com/api.php/4538936262791718/search/${name}`)
			.then((resp) => {
				if (resp.data.response === "success") {
					setHeroes(resp.data.results);
				}
			})
			.catch(<Error></Error>);
		e.preventDefault();
	};
	const modoBusqueda = (e) => {
		e.preventDefault();
		if (buscarxId) {
			setBuscarxId(false);
		} else {
			setBuscarxId(true);
		}
	};

	return (
		<div>
			<div className="row">
				<div className="col"></div>
				<form
					className="form-group col-md-auto"
					onSubmit={buscarxId ? getHero : getHeroes}
				>
					{buscarxId ? (
						<div>
							<h2 className="text-muted my-3">Busqueda por ID</h2>
							<input
								className="form-control my-2 col"
								type="number"
								placeholder="Introduce el Id"
								onChange={(e) => {
									setId(e.target.value);
								}}
								value={id}
							/>
							<button className="btn btn-dark col my-2" type="submit">
								Buscar por ID
							</button>
							<button className="btn btn-info col m-2" onClick={modoBusqueda}>
								Cambiar modo de busqueda
							</button>
						</div>
					) : (
						<div>
							<h2 className="text-muted my-3">Busqueda por nombre</h2>
							<input
								className="form-control col my-2"
								type="text"
								placeholder="Ingrese el nombre del superheroe"
								onChange={(e) => {
									setName(e.target.value);
								}}
								value={name}
							/>
							<button className="btn btn-dark col my-2" type="submit">
								Buscar por nombre
							</button>
							<button className="btn btn-info col m-2" onClick={modoBusqueda}>
								Cambiar modo de busqueda
							</button>
						</div>
					)}
				</form>

				<div className="col"></div>
			</div>
			{buscarxId ? (
				hero.response === "error" ? (
					<Error></Error>
				) : (
					<div className="container">
						<div className="row">
							<div className="col"></div>
							<div className="col">
								<Card hero={hero} />
							</div>
							<div className="col"></div>
						</div>
					</div>
				)
			) : hero.response === "error" ? (
				<Error></Error>
			) : (
				<div className="container">
					<div className="row">
						{heroes.map((i) => (
							<div className="col">
								<Card hero={i} />
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default Search;
