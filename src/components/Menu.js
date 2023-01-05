const Menu = ({ onClick }) => {
    return (
        <div className="Menu">
            <button className="start-button" onClick={onClick}>
                Start Game
            </button>
        </div>
    )
};

export default Menu;