import { useNavigate } from "react-router-dom";

export const PlayerCard = ({ player }) => {
	const navigate = useNavigate();

	return (
		<div className="player_card">
			<img className="player_photo" src={player.imageUrl} />
			<h3>{player.name}</h3>
			<p className="status">Status {player.status}</p>
			<p className="breed">{player.breed}</p>
			<button onClick={() => navigate(`/players/${player.id}`)}>
				See details
			</button>
		</div>
	);
};
