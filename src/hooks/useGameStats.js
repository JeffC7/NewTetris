import { useState, useCallback } from 'react';

const buildGameStats = () => ({
    lines: 0,
});

export const useGameStats = () => {
    const [gameStats, setGameStats] = useState(buildGameStats());
    const addLinesCleared = useCallback(() => {}, []);

    return [gameStats, addLinesCleared];
}