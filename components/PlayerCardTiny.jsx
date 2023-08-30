import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editPoints } from "../redux/playersSlice";
import InputField from "../components/InputField";
import style from "../styles/components/PlayerCardTiny.module.scss";

function PlayerCardTiny({ player, bgColor }) {
    const gameSettings = useSelector((state) => state.gameSettings);
    const [inputVisible, setInputVisible] = useState(false);
    const inputRef = useRef(null);
    const dispatch = useDispatch();

    const hasPassedMAX = gameSettings.maxPoints - player.points <= 0;
    const playerInitials = player.name[0] + player.name[1];
    const passedMAXColor = "#ff3f3f";

    useEffect(() => {
        if (inputVisible) {
            inputRef.current.focus();
        }
    }, [inputVisible]);

    // Opens an input field to edit the player name
    const handleClick = () => {
        setInputVisible(true);
    };

    // Changes the players points to the input value
    const handleInput = (e) => {
        let inputValue = e.target.value;
        if (inputValue === "") {
            inputValue = player.points;
        }
        const newScore = parseInt(inputValue);

        dispatch(editPoints({ playerId: player.id, newScore: newScore }));
        setInputVisible(false); // Unmounts the input field
    };

    return (
        <article className={style.playerCardTiny}>
            <p
                className={style.playerCardTiny__initials}
                style={{
                    backgroundColor: hasPassedMAX
                        ? passedMAXColor
                        : `${bgColor}`,
                }}
            >
                {playerInitials}
            </p>

            {player.pointsHistory.length < 1 ? (
                <p className={style.playerCardTiny__point}>{player.points}</p>
            ) : (
                player.pointsHistory.map((point, i) => {
                    // Checks if the current element is the last element in the pointsHistory list
                    const isLastElement = i === player.pointsHistory.length - 1;

                    return (
                        <>
                            {inputVisible && isLastElement && (
                                // Mounts an inputfield only for the last element
                                <InputField
                                    className={"tinyEditPointInput"}
                                    type="number"
                                    ref={inputRef}
                                    defaultValue={player.points}
                                    onBlur={handleInput}
                                    inputmode={"numeric"}
                                    pattern={"[d+-]"}
                                />
                            )}
                            <p
                                className={style.playerCardTiny__point}
                                // Onclick mounts an input field for the last element
                                onClick={isLastElement ? handleClick : null}
                            >
                                {point}
                            </p>
                        </>
                    );
                })
            )}
        </article>
    );
}

export default PlayerCardTiny;
