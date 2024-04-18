import { Routes, Route } from "react-router-dom";
import { AllPlayers } from "./components/AllPlayers";
import "./App.css";

function App() {
	return (
		<Routes>
			<Route path="/" element={<AllPlayers />} />
			<Route path="/players" element={<AllPlayers />} />
		</Routes>
	);
}

export default App;
