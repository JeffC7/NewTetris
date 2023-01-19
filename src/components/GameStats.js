import React from 'react';

const GameStats = ({ gameStats }) => {
    const { lines } = gameStats;
    return (
        <ul className="GameStats GameStats__right">
            <li>Lines</li>
            <li className="value">{lines}</li>
        </ul>
    );
};

export default React.memo(GameStats);