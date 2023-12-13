import "./App.css";
import { Link } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<p>
					Edit <code>src/App.jsx</code> and save to reload.
				</p>
				<Link
					className="App-link"
					to={'/blog'}
					rel="noopener noreferrer"
				>
					Learn React
				</Link>
			</header>
		</div>
	);
}

export default App;
