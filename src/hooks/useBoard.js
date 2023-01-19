import { useState, useEffect } from 'react';
import { buildBoard, nextBoard } from '../game/Board';

export const useBoard = ({
    rows, 
    columns,
    player,
    resetPlayer,
    linesCleared,
}) => {
    const [board, setBoard] = useState(buildBoard({rows, columns}));
    
    useEffect(() => {
        setBoard((previousBoard) => 
            nextBoard({
                board: previousBoard,
                player,
                resetPlayer,
                linesCleared
            })
        );
    }, [player, resetPlayer, linesCleared]);

    return [board];
};

