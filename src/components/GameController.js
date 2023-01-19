import { Action, actionForKeyCode } from '../game/Input';
import { playerController } from '../game/PlayerController';

const GameController = ({ board, gameStats, player, setGameOver, setPlayer }) => {
    const onKeyUp = ({ code }) => {
        const action = actionForKeyCode(code);

        if (action === Action.Quit)
            setGameOver(true);
    }

    const onKeyDown = ({ code }) => {
        const action = actionForKeyCode(code);
        handleInput({action});
    };

    const handleInput = ({ action }) => {
        playerController({
            action,
            board,
            player,
            setPlayer,
            setGameOver,

        });
    };

    return (
        <input
            className="GameController"
            type="text"
            onKeyDown={onKeyDown}
            onKeyUp={onKeyUp}
            autoFocus
        /> 
    );
}

export default GameController;