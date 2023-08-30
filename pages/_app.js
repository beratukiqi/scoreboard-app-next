import "@/styles/main.scss";
import { Provider, useDispatch } from "react-redux";
import { store } from "../redux/store";
import { useEffect, useState } from "react";
import { loadState } from "../helpers/helperFunctions";
import { loadPlayerState } from "../redux/playersSlice";
import { loadSettingsState } from "../redux/gameSettingsSlice";

function StateLoader({ children }) {
    const dispatch = useDispatch();
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const loadedState = loadState();
        if (loadedState) {
            dispatch(loadPlayerState(loadedState.players));
            dispatch(loadSettingsState(loadedState.gameSettings));
        }
        setIsReady(true);
    }, [dispatch]);

    if (!isReady) {
        return null;
    }

    return children;
}

export default function App({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <StateLoader>
                <Component {...pageProps} />
            </StateLoader>
        </Provider>
    );
}
