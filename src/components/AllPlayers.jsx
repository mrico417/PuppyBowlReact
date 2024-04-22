import { useEffect, useState } from "react";
import { fetchAllPlayers } from "../API";
import { PlayerCard } from "./PlayerCard";

export const AllPlayers = () => {
	const [players, setPlayers] = useState([]);
	const [filteredPlayers, setFilteredPlayers] = useState([]);

	useEffect(() => {
		const getPlayers = async () => {
			try {
				const players = await fetchAllPlayers();
				setPlayers(players);
				setFilteredPlayers(players);
				//console.log(players);
			} catch (err) {
				console.log("useEffect error fetching all players!!!");
			}
		};

		getPlayers();
	}, []);

	const onSearchChange = (event) => {
		const searchTerm = event.target.value.toLowerCase();
		// console.log(event.target.value.toLowerCase());
		const filteredPlayers = players.filter((player) =>
			player.name.toLowerCase().includes(searchTerm)
		);
		setFilteredPlayers(filteredPlayers);
	};

	return (
		<>
			<div className="cls-all-players-main-container">
				<div className="cls-row-spacer"></div>
				<div className="cls-search-container">
					<label htmlFor="searchInput">Search</label>
					<input id="searchInput" type="text" onChange={onSearchChange} />
				</div>
				<div className="cls-row-spacer"></div>
				<div className="all-players-container">
					<br />
					{filteredPlayers.map((player) => {
						return <PlayerCard key={player.id} player={player} />;
					})}
				</div>
			</div>
		</>
	);
};
