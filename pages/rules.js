import { useRouter } from "next/router";
import HeaderMenu from "../components/HeaderMenu";
import BackButtonIcon from "../components/icons/BackButtonIcon";
import ContentContainer from "../components/ContentContainer";
import style from "../styles/pages/Rules.module.scss";

function Rules() {
    const navigate = useRouter();

    return (
        <section className={style.pageContainer}>
            <HeaderMenu
                renderContent={() => (
                    <BackButtonIcon onClick={() => navigate.back()} />
                )}
            />

            <main className="contentWrapper">
                <ContentContainer
                    title={"Såhär fungerar Matatu"}
                    renderContent={() => (
                        <ul>
                            <li>
                                Matatu fungerar på samma sätt som UNO, där målet
                                är att bli av med sina kort så fort som möjligt.
                            </li>
                            <li>
                                När en spelare har blivit av med alla sina kort
                                är rundan över, då börjar poängräkningen. Alla
                                kort som finns kvar i en spelares hand ska då
                                räknas ihop och läggas till som poäng
                            </li>
                            <li>
                                Målet är att ha så lite poäng som möjligt, d.v.s
                                bli av med så många kort som möjligt.
                            </li>
                            <li>
                                Spelet fortsätter och nya rundor spelas tills
                                någon av spelarna passerar MAX gränsen.
                            </li>
                        </ul>
                    )}
                />

                <ContentContainer
                    title={"Instruktioner"}
                    renderContent={() => (
                        <ol>
                            <li>
                                Varje spelare startar med 7 kort. <br />
                                Spelet går i turordning.
                            </li>

                            <li>
                                Ett kort dras från korthögen och placeras
                                uppvänt på bordet. Mönstret på detta kort är det
                                mönster 'Cuttern' ska spelas i under denna
                                runda.
                            </li>

                            <li>
                                Resten av korthögen placeras ovanpå det uppvända
                                kortet så att det syns.
                            </li>
                            <li>
                                En spelare börjar spelet med att lägga ut
                                valfritt kort
                            </li>

                            <li>
                                Nästa spelare måste lägga ett kort som följer
                                samma valör eller mönster. Det finns även kort
                                med olika funktioner.
                            </li>
                            <li>
                                Spelaren lägger ett kort ovanpå det tidigare
                                kortet och turen går vidare. Kan spelaren inte
                                lägga ett kort plockar hen upp ett kort från
                                korthögen.
                            </li>
                            <li>
                                Ett upp-plockat kort får läggas ner direkt om
                                möjligt, annars passar man och turen går vidare.
                            </li>
                            <li>
                                Spelet fortsätter tills någon spelare lagt ut
                                alla sina kort eller tills någon cuttar spelet
                            </li>
                        </ol>
                    )}
                />

                <ContentContainer
                    title={"Kortfunktioner"}
                    renderContent={() => (
                        <ul>
                            <li>
                                A &hearts; &diams; &clubs; , Byter till valfritt
                                mönster
                            </li>

                            <li>
                                A &spades; - Blockerar straffkort / Väljer
                                siffra som måste spelas (måste finnas i din egna
                                hand)
                            </li>
                            <li>
                                2 - 2 Straffkort. Kan läggas på andra
                                straffkort. Samma valör = Skicka vidare, Högre
                                valör = Reducera straffkort
                            </li>
                            <li>
                                3 - 3 Straffkort. Kan läggas på andra
                                straffkort. Samma valör = Skicka vidare, Högre
                                valör = Reducera straffkort
                            </li>
                            <li>7 (inte cutter) - Byter spelriktning</li>
                            <li>
                                7 (cutter) - Avslutar spelet oberoende av hur
                                många kort som är kvar i handen. Personen som
                                cuttar måste ha lägst poäng, annars dubblas
                                cuttarens poäng. Spelaren med lägst poäng vinner
                                rundan och behöver inte lägga till sina poäng.
                            </li>
                            <li>
                                8 - Spela ett extra kort. Du får lägga valfritt
                                kort så länge det håller sig till spelreglerna.
                            </li>
                            <li>
                                Knekt - Spela ett extra kort. Du får lägga
                                valfritt kort så länge det håller sig till
                                spelreglerna.
                            </li>
                            <li>
                                JOKER - 5 Straffkort. Kan läggas på andra
                                straffkort. Samma/mindre valör = Skicka vidare
                            </li>
                        </ul>
                    )}
                />

                <ContentContainer
                    title={"Poängräkning"}
                    renderContent={() => (
                        <ul>
                            <li>A &hearts; &diams; &clubs; - 15p</li>
                            <li>
                                A &spades; - 60p i hand / -60p om kortet vinner
                                rundan
                            </li>
                            <li>2 - 20p</li>
                            <li>3 - 30p</li>
                            <li>7 (cutter) - 25p</li>
                            <li>Knekt/Dam/Kund- 10p</li>
                            <li>JOKER - 50p</li>
                            <li>Övriga kort - kortets valör i poäng</li>
                        </ul>
                    )}
                />
            </main>
        </section>
    );
}

export default Rules;
