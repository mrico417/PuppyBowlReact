import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const AddNewPlayer = () => {
	const navigate = useNavigate();

	// Todo:
	// validate input before submission
	// not sure if validate onChange or handleSubmit
	// that's the reason of the useState below that are binded with input props in form

	const [name, setName] = useState("");
	const [breed, setBreed] = useState("");
	const [status, setStatus] = useState("");
	const [imageUrl, setImageUrl] = useState("");

	const cohortName = "2401-ftb-mt-web-pt";
	const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

	// if handleSubmit gets moved to API > index.js, there a bug is created with fetch.
	// fetch or REACT form first try to send null data since input fields are not initialized
	// but they are in useState(""), that's a weird bug.
	// to avoid this bug, the fetch call needs to execute from this jsx.
	async function handleSubmit(event) {
		event.preventDefault();
		try {
			const response = await fetch(`${APIURL}/players`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					name: event.target.name.value,
					breed: event.target.breed.value,
					status: event.target.status.value,
					imageUrl: event.target.imageUrl.value,
				}),
			});
			const result = await response.json();
			if (result.success) navigate("/players");
		} catch (err) {
			console.error(err);
		}
	}

	return (
		<>
			<div className="add-new-player-container">
				<form id="new-player-form" onSubmit={handleSubmit}>
					<label htmlFor="name">name:</label>
					<input
						className="cls-form-input"
						type="text"
						id="name"
						placeholder="name"
						value={name}
						onChange={(event) => {
							setName(event.target.value);
						}}
					/>

					<label htmlFor="breed">breed:</label>
					<input
						className="cls-form-input"
						type="text"
						id="breed"
						placeholder="breed"
						value={breed}
						onChange={(event) => {
							setBreed(event.target.value);
						}}
					/>

					<label htmlFor="status">status:</label>
					<input
						className="cls-form-input"
						type="text"
						id="status"
						placeholder="field or bench"
						value={status}
						onChange={(event) => {
							setStatus(event.target.value);
						}}
					/>

					<textarea
						cols="30"
						rows="10"
						id="imageUrl"
						placeholder="imageUrl"
						value={imageUrl}
						onChange={(event) => {
							setImageUrl(event.target.value);
						}}
					/>
					<div className="submit-wrapper">
						<button type="submit" value="Submit" className="cls-submit">
							Submit
						</button>
					</div>
				</form>
			</div>
		</>
	);
};
