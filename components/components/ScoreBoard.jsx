import PlayerCardTiny from "./PlayerCardTiny";
import { useSelector } from "react-redux";

function ScoreBoard() {
    const playerList = useSelector((state) => state.players);
    const noOfPlayers = playerList.length;

    return (
        <section
            className="scoreboard-container"
            style={{
                gridTemplateColumns: `repeat(${noOfPlayers}, 3rem)`,
            }}
        >
            {playerList.map((player, i) => (
                <PlayerCardTiny
                    key={player.name + i}
                    player={player}
                    bgColor={player.bgColor}
                />
            ))}
        </section>
    );
}

export default ScoreBoard;
