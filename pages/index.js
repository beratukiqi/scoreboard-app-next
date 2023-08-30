import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import {
    changeMaxPoints,
    changeNoOfPlayers,
    resetToInitialState,
    setColorsData,
    setNamesData,
} from "../redux/gameSettingsSlice";
import { clearState, generatePlayer } from "../redux/playersSlice";
import Header from "../components/Header";
import InputField from "../components/InputField";
import HeaderMenu from "../components/HeaderMenu";
import GameRulesIcon from "../components/icons/GameRulesIcon";
import PrimaryButton from "../components/PrimaryButton";
import ContentContainer from "../components/ContentContainer";
import style from "../styles/pages/LandingPage.module.scss";

function LandingPage() {
    const dispatch = useDispatch();
    const navigate = useRouter();
    const inputRef = useRef(null);

    useEffect(() => {
        dispatch(resetToInitialState());
        dispatch(clearState());
    }, []);

    // Fetches the names from the data.json file
    useEffect(() => {
        async function fetchNameData() {
            try {
                const response = await fetch("/data.json");
                const data = await response.json();
                // Sets the fetched names to the state for future use
                dispatch(setNamesData(data.names));
                dispatch(setColorsData(data.colors));
            } catch (error) {
                console.error(error, "Something went wrong");
            }
        }
        fetchNameData();
    }, []);

    const gameSettings = useSelector((state) => state.gameSettings);

    // Generates a unique name to a player
    const superheroNameGenerator = () => {
        let superHeroNameList = gameSettings.namesData;

        let firstIndex = Math.floor(
            Math.random() * superHeroNameList[0].first.length
        );
        let secondIndex = Math.floor(
            Math.random() * superHeroNameList[1].second.length
        );

        let firstName = superHeroNameList[0].first[firstIndex];
        let secondName = superHeroNameList[1].second[secondIndex];
        let fullName = `${firstName} ${secondName}`;

        return fullName;
    };

    const generateColor = (i) => {
        let colorList = gameSettings.colorsData;
        let chosenIndex = i;
        return colorList[chosenIndex];
    };

    // Takes input and updates a new MAX points to the state
    const handleMaxPoints = (e) => {
        let inputValue = e.target.value;
        inputValue = !inputValue
            ? gameSettings.maxPoints
            : parseInt(inputValue);

        dispatch(changeMaxPoints({ newMaxPoints: inputValue }));
        e.target.value = inputValue; // Changes the UI to the new value
        e.target.blur();
    };

    // Takes input and updates the number of players to the state
    const handleNoOfPlayers = (e) => {
        let inputValue = e.target.value;
        inputValue = !inputValue
            ? gameSettings.noOfPlayers
            : parseInt(inputValue);

        dispatch(changeNoOfPlayers(inputValue));
        e.target.value = inputValue; // Changes the UI to the new value
        e.target.blur();
    };

    // Creates unique player objects and populates the state.
    const generatePlayers = () => {
        for (let i = 1; i <= gameSettings.noOfPlayers; i++) {
            const name = superheroNameGenerator();

            const newPlayer = {
                id: name,
                name: name,
                bgColor: generateColor(i - 1),
                points: 0,
                pointsToAdd: 0,
                pointsHistory: [],
            };

            dispatch(generatePlayer(newPlayer));
        }
    };

    return (
        <section className={style.pageContainer}>
            <HeaderMenu
                renderContent={() => (
                    <GameRulesIcon onClick={() => navigate.push("/rules")} />
                )}
            />
            <main className="contentWrapper">
                <Header title={"Let’s set up some things before we start!"} />
                <ContentContainer
                    title={"Enter MAX points"}
                    renderContent={() => (
                        <InputField
                            type={"number"}
                            defaultValue={gameSettings.maxPoints}
                            onBlur={handleMaxPoints}
                            inputmode={"numeric"}
                            pattern={"[d+-]"}
                            ref={inputRef}
                        />
                    )}
                />

                <ContentContainer
                    title={"Enter number of players"}
                    renderContent={() => (
                        <InputField
                            type={"number"}
                            defaultValue={gameSettings.noOfPlayers}
                            onBlur={(e) => handleNoOfPlayers(e)}
                            inputmode={"numeric"}
                            pattern={"[d+-]"}
                        />
                    )}
                />

                <PrimaryButton
                    title={"Next"}
                    path={"/register"}
                    action={generatePlayers}
                />
            </main>
        </section>
    );
}

export default LandingPage;
