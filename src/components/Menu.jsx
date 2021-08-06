import React, { useState, useEffect } from "react";
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
				</ul>
			</nav>
		</div>
	);
};

export default Menu;
