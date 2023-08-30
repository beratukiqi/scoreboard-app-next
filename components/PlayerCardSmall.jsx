import { useSelector } from "react-redux";
import style from "../styles/components/PlayerCardSmall.module.scss";

function PlayerCardSmall({ player, dangerZone, bgColor }) {
    const gameSettings = useSelector((state) => state.gameSettings);
    const hasPassedMAX = gameSettings.maxPoints - player.points <= 0;
    const passedMAXColor = "#ff3f3f";

    return (
        <article
            className={style.playerCardSmall}
            style={{
                backgroundColor: hasPassedMAX ? passedMAXColor : `${bgColor}`,
            }} // Handles background color when players pass MAX point limit
        >
            <p>{player.name}</p>
            <p>
                {dangerZone // Renders points differently if PlayerCard is in DangerZone
                    ? gameSettings.maxPoints - player.points <= 0
                        ? Math.abs(gameSettings.maxPoints - player.points) +
                          " points above"
                        : gameSettings.maxPoints -
                          player.points +
                          " points left"
                    : player.points}
            </p>
        </article>
    );
}

export default PlayerCardSmall;
