import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPlayer } from "../API";
import { PlayerCard } from "./PlayerCard";

export const SinglePlayer = () => {
	const { playerId } = useParams();
	const [player, setPlayer] = useState({});

	useEffect(() => {
		const getPlayer = async () => {
			const fetchedPlayer = await fetchPlayer(playerId);
			setPlayer(fetchedPlayer);
		};
		getPlayer();
	}, []);

	//console.log(player);

	return <PlayerCard key={player.id} player={player} />;
};
