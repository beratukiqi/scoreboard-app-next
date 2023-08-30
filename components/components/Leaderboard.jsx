import PlayerCardSmall from "./PlayerCardSmall";
import { useSelector } from "react-redux";

function Leaderboard() {
    const playerList = useSelector((state) => state.players);
    return (
        <>
            {[...playerList]
                // Renders the players from lowest to highest points.
                .sort((a, b) => a.points - b.points)
                .map((player, i) => (
                    <PlayerCardSmall
                        key={i}
                        player={player}
                        bgColor={player.bgColor}
                    />
                ))}
        </>
    );
}

export default Leaderboard;
