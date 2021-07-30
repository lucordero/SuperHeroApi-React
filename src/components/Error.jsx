import React from "react";

const Error = () => {
	return (
		<div className="row">
			<div className="col"></div>
			<div className="alert alert-danger col ms-4">No existe heroe.</div>
			<div className="col"></div>
		</div>
	);
};

export default React.memo(Error);
