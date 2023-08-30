import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeNoOfPlayers } from "../redux/gameSettingsSlice";
import {
    setPointsToAdd,
    removePlayer,
    changePlayerName,
} from "../redux/playersSlice";
import MinusButtonIcon from "./icons/MinusButtonIcon";
import DeleteButtonIcon from "./icons/DeleteButtonIcon";
import style from "../styles/components/PlayerCardBig.module.scss";
import InputField from "./InputField";

function PlayerCardBig({ player, bgColor, hasScoreInput, hasEditableNames }) {
    const gameSettings = useSelector((state) => state.gameSettings);

    const dispatch = useDispatch();
    const inputRef = useRef(null);

    const [inputVisible, setInputVisible] = useState(false);

    // Sets the input field in focus as soon as it displays
    useEffect(() => {
        if (inputVisible) {
            inputRef.current.focus();
        }
    }, [inputVisible]);

    // Opens an input field to edit the player name
    const handleShowEdit = () => {
        setInputVisible(true);
    };

    // Changes player name to the input value
    const handleNameChange = (e) => {
        let inputValue = e.target.value;

        // Resets the player name if input is left empty
        if (inputValue === "") {
            inputValue = player.name;
        }

        dispatch(
            changePlayerName({ playerId: player.id, newName: inputValue })
        );
        setInputVisible(false); // Unmounts the input element
    };

    // Gets the points to add to the player
    const handleInputPoints = (e) => {
        let inputValue = e.target.value;

        // Handles empty inputs
        if (inputValue === "") {
            inputValue = 0;
        }

        dispatch(
            setPointsToAdd({
                playerId: player.id,
                newScore: parseInt(inputValue),
            })
        );
    };

    // Swaps the inputValue to a negative number
    const handleNegativeButton = () => {
        const inputValue = inputRef.current.value;
        inputRef.current.value = -inputValue;

        dispatch(
            setPointsToAdd({
                playerId: player.id,
                newScore: Number(inputRef.current.value),
            })
        );
    };

    const handleDelete = () => {
        dispatch(removePlayer(player.id));
        dispatch(changeNoOfPlayers(gameSettings.noOfPlayers - 1));
    };

    return (
        <section className={style.playerCardBig}>
            <article
                onClick={hasEditableNames ? handleShowEdit : null} //
                className={style.playerCardBig__name}
                style={{ backgroundColor: `${bgColor}` }}
            >
                <p>{player.name}</p>
            </article>

            {inputVisible && (
                <InputField
                    type={"text"}
                    className={"editNameInput"}
                    onBlur={handleNameChange}
                    ref={inputRef}
                    defaultValue={player.name}
                />
            )}

            {hasScoreInput ? (
                <>
                    <InputField
                        id={player.id}
                        type={hasScoreInput ? "number" : "string"}
                        onBlur={handleInputPoints}
                        ref={inputRef}
                        inputmode={"numeric"}
                        pattern={"[d+-]"}
                    />
                    <MinusButtonIcon
                        onClick={() => handleNegativeButton(player.id)}
                    />
                </>
            ) : (
                <section className={style.playerCardBig__buttons}>
                    <DeleteButtonIcon onClick={handleDelete} />
                </section>
            )}
        </section>
    );
}

export default PlayerCardBig;
