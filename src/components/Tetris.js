import Board from './Board';
import GameStats from './GameStats';
import Previews from './Previews';
import GameController from './GameController';

import { useBoard } from '../hooks/useBoard';
import { useGameStats } from '../hooks/useGameStats';
import { usePlayer } from '../hooks/usePlayer';

const Tetris = ({ rows, columns, setGameOver }) => {
    const [gameStats, linesCleared] = useGameStats();
    const [player, setPlayer, resetPlayer] = usePlayer();
    const [board, setBoard] = useBoard({ 
        rows, 
        columns,
        player,
        resetPlayer,
        linesCleared,
    });
    
    return (
        <div className='Tetris'>
            <Board board={board}/>
            <div className="container">
                <Previews tetrominoes = {player.tetrominoes} />
                <GameStats gameStats={gameStats}/>
            </div>
            <GameController 
                board={board}
                gameStats={gameStats}
                player={player}
                setGameOver={setGameOver}
                setPlayer={setPlayer}
            />
        </div>
    )
};

export default Tetris

