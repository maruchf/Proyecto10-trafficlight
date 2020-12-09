import React, { useEffect, useState } from "react";

//create your first component-Traffic Light

export function Home() {
	//Declaración de estado de mi App con Hook
	const [statusColor, setStatusColor] = useState("");

	return (
		<div className="row">
			<div className="container-fluid card bg-dark">
				<div>
					<button
						onClick={() => setStatusColor("encendida-red")}
						type="button"
						className={`btn btn-danger btn-circle ${
							statusColor === "encendida-red" ? statusColor : ""
						}`}
					/>
				</div>
				<div>
					<button
						onClick={() => setStatusColor("encendida-yellow")}
						type="button"
						className={`btn btn-warning btn-circle ${
							statusColor === "encendida-yellow"
								? statusColor
								: ""
						}`}
					/>
				</div>
				<div>
					<button
						onClick={() => setStatusColor("encendida-green")}
						type="button"
						className={`btn btn-success btn-circle ${
							statusColor === "encendida-green" ? statusColor : ""
						}`}
					/>
				</div>
			</div>
		</div>
	);
}

//Mis apuntes:
// const [colorYellow, setColorYellow] = useState("");
// const [colorGreen, setColorGreen] = useState("");

//NO NECESITO USAR useEffect porque el status del color que indica si se activó o no el Onclick ya es un estado
//puedo usar statusColor ya definido y generar el className a partir de allí
//Autor1
// 	const [selected, setSelectedState] = useState(true);
// const className = "appointment-item " + (selected ? "selected" : "");
// return (
//   <div className={className} />

//Autor2 dependiendo del caso puedo usar use effect
// const [selected, setSelectedState] = useState(true); // 0

// let className = "none"; // 1

// useEffect(() => {
//     // 3
//     className = "appointment-item " + (selected ? "selected" : "");
//     console.log(className );
// }, [selected] );

// // 2
// return (
//   <div className={`${className}`} onClick={()=>setSelectedState(!selected)}>{Math.random()}</div>
// );
//otra alternativa para el cambio de estado y validar el correcto // esta no funcionó porque debo hacerlo en cada botón
//operador ternario valida y es opción final
// function clase(statusColor) {
// 	if (statusColor === "encendida-red") {
// 		return `btn btn-danger btn-circle ${statusColor}`;
// 	} else if (statusColor === "encendida-yellow") {
// 		return `btn btn-warning btn-circle ${statusColor}`;
// 	} else if (statusColor === "encendida-green") {
// 		return `btn btn-success btn-circle ${statusColor}`;
// 	} else "";
// }
