import Game from "./components/Game";
import './App.css';

function App() {
  return (
    <div className="App">
      <Game rows={20} columns={20}></Game>
    </div>
    
  );
}

export default App;
