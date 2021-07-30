import React, { useState, useEffect } from "react";
import Error from "./Error";

const Card = (h) => {
	//TODO: agregar boton "Ver Más" para mostrar detalles de heroe
	const [hero, setHero] = useState({ response: "error" });
	const [name, setName] = useState("");
	const [img, setImg] = useState({ url: "" });
	const [url, setUrl] = useState("https://via.placeholder.com/150");
	useEffect(() => {
		setHero(h.hero);
		setName(hero.name);
		setImg(hero.image);
		if (img) {
			setUrl(img.url);
		}
	}, [h, hero, img]);
	return hero.response === "error" ? (
		<Error />
	) : (
		<div className=" m-0 p-0" style={{ width: "300px" }}>
			<div className="card my-2" style={{ width: "18rem" }}>
				<img src={url} className="card-img-top " alt="..." />
				<div className="card-body">
					<h5 className="card-title">{name}</h5>
				</div>
			</div>
		</div>
	);
};

export default React.memo(Card);
