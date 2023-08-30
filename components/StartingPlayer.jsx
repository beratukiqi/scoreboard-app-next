import { useSelector } from "react-redux";
import PlayerCardSmall from "./PlayerCardSmall";

function StartingPlayer() {
    const playerList = useSelector((state) => state.players);

    // Gets the player with the highest points
    const startingPlayer = [...playerList].sort(
        (a, b) => b.points - a.points
    )[0];

    return (
        // Renders the player with the highest points
        <PlayerCardSmall
            player={startingPlayer}
            bgColor={startingPlayer.bgColor}
        />
    );
}

export default StartingPlayer;
