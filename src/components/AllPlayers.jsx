import { useEffect, useState } from "react";
import { fetchAllPlayers } from "../API";
import { PlayerCard } from "./PlayerCard";

export const AllPlayers = () => {
	const [players, setPlayers] = useState([]);

	useEffect(() => {
		const getPlayers = async () => {
			try {
				const players = await fetchAllPlayers();
				setPlayers(players);
				//console.log(players);
			} catch (err) {
				console.log("useEffect error fetching all players!!!");
			}
		};

		getPlayers();
	}, []);

	return (
		<div id="all-players-container">
			{players.map((player) => {
				return <PlayerCard key={player.id} player={player} />;
			})}
		</div>
	);
};
