import { Routes, Route } from "react-router-dom";
import { AllPlayers } from "./components/AllPlayers";
import { SinglePlayer } from "./components/SinglePlayer";
import "./App.css";

function App() {
	return (
		<Routes>
			<Route path="/" element={<AllPlayers />} />
			<Route path="/players" element={<AllPlayers />} />
			<Route path="/players/:playerId" element={<SinglePlayer />} />
		</Routes>
	);
}

export default App;
