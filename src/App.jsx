import "./App.css";
import { Mainsection } from "./components/Mainsection";
import { Navbar } from "./components/Navbar";

function App() {
	return (
		<div id="container">
			<Navbar />
			<Mainsection />
		</div>
	);
}

export default App;
