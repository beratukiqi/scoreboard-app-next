import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Header from "../components/Header";
import HeaderMenu from "../components/HeaderMenu";
import ScoreBoard from "../components/ScoreBoard";
import DangerZone from "../components/DangerZone";
import SettingsIcon from "../components/icons/SettingsIcon";
import Leaderboard from "../components/Leaderboard";
import PrimaryButton from "../components/PrimaryButton";
import GameRulesIcon from "../components/icons/GameRulesIcon";
import StartingPlayer from "../components/StartingPlayer";
import ContentContainer from "../components/ContentContainer";
import style from "../styles/pages/Overview.module.scss";

function Overview() {
    const navigate = useRouter();
    const gameSettings = useSelector((state) => state.gameSettings);

    return (
        <section className={style.pageContainer}>
            <HeaderMenu
                renderContent={() => (
                    <>
                        <GameRulesIcon
                            onClick={() => navigate.push("/rules")}
                        />
                        <SettingsIcon
                            onClick={() => navigate.push("/settings")}
                        />
                    </>
                )}
            />
            <main className="contentWrapper">
                <Header
                    title={"Game overview!"}
                    subTitle={
                        "Keep track of who is in the lead and who to target together! "
                    }
                />

                <h2>Max points: {gameSettings.maxPoints}</h2>

                <ContentContainer
                    title={"Leaderboard"}
                    renderContent={() => <Leaderboard />}
                />

                <ContentContainer
                    title={"Scoreboard"}
                    renderContent={() => <ScoreBoard />}
                />

                <ContentContainer
                    title={"Danger Zone!"}
                    renderContent={
                        // Renders players with < 100 points left in asc order
                        () => <DangerZone />
                    }
                />

                <ContentContainer
                    title={"Starting player:"}
                    renderContent={() => <StartingPlayer />}
                />

                <PrimaryButton title={"Add points"} path={"/finishedround"} />
            </main>
        </section>
    );
}

export default Overview;
