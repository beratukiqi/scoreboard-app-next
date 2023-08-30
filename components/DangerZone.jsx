import { useSelector } from "react-redux";
import PlayerCardSmall from "./PlayerCardSmall";

function DangerZone() {
    const playerList = useSelector((state) => state.players);
    const gameSettings = useSelector((state) => state.gameSettings);
    const dangerZoneLimit = 100; // 100 points or less left to reach MAX point limit

    const playersInDangerZone = playerList

        // Filters players that passed the danger zone limit
        .filter(
            (player) =>
                gameSettings.maxPoints - player.points <= dangerZoneLimit
        )
        // Player storted by the highest to lowest points
        .sort((a, b) => b.points - a.points);

    return playersInDangerZone.length > 0 ? (
        <>
            {playersInDangerZone.map((player, i) => (
                <PlayerCardSmall
                    key={i}
                    player={player}
                    dangerZone={true}
                    bgColor={player.bgColor}
                />
            ))}
        </>
    ) : (
        <>
            <p>No player in danger...for now</p>
        </>
    );
}

export default DangerZone;
