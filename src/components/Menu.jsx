import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark position-relative">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<NavLink to="/" className="nav-link">
							Inicio
						</NavLink>
					</li>
					{/* <li className="nav-item">
						{!user ? (
							<NavLink to="/login" className="nav-link" >
								Login
							</NavLink>
						) : (
							<span></span>
						)}
					</li> */}
					<li className="nav-item">
						<NavLink className="nav-link" to="/search">
							Buscar Heroe
						</NavLink>
					</li>
					{/* <li className="nav-item">
						{user ? (
							<NavLink to="/Search" className="nav-link" >
								Buscar Heroe
							</NavLink>
						) : (
							<span></span>
						)}
					</li> */}
				</ul>
				{/* {user ? (
					<button className="btn btn-danger m-3 position-absolute end-0">
						Cerrar sesion
					</button>
				) : (
					<span></span>
				)} */}
			</nav>
		</div>
	);
};

export default Menu;
