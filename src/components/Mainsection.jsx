import { Route, Routes } from "react-router-dom";
import { AllPlayers } from "./AllPlayers";
import { SinglePlayer } from "./SinglePlayer";
import { AddNewPlayer } from "./AddNewPlayer";

export const Mainsection = () => {
	return (
		<div id="main-section">
			<Routes>
				<Route path="/" element={<AllPlayers />} />
				<Route path="/players" element={<AllPlayers />} />
				<Route path="/players/:playerId" element={<SinglePlayer />} />
				<Route path="/AddNewPlayer" element={<AddNewPlayer />} />
			</Routes>
		</div>
	);
};
