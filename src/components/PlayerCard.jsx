import { useNavigate } from "react-router-dom";
import { deletePlayer } from "../API/index";

export const PlayerCard = ({ player }) => {
	const navigate = useNavigate();

	const handleDelete = async (playerId) => {
		const response = await deletePlayer(playerId);

		if (response.success) navigate(`/`);
	};
	return (
		<div className="player_card">
			<img className="player_photo" src={player.imageUrl} />
			<h3>{player.name}</h3>
			<p className="status">Status {player.status}</p>
			<p className="breed">{player.breed}</p>
			<button onClick={() => navigate(`/players/${player.id}`)}>
				See details
			</button>
			<button onClick={() => handleDelete(`${player.id}`)}>Delete</button>
		</div>
	);
};
