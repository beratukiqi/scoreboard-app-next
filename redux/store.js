import { configureStore } from "@reduxjs/toolkit";
import playersReducer from "../redux/playersSlice";
import gameSettingsReducer from "../redux/gameSettingsSlice";
import { saveState, loadState } from "../helpers/helperFunctions";

const loadedState = loadState(); // Gets the saved state from localStorage

export const store = configureStore({
    reducer: {
        players: playersReducer,
        gameSettings: gameSettingsReducer,
    },
    preloadedState: loadedState,
});

store.subscribe(() => {
    saveState(store.getState()); // Saves the state to localStorage when changes occur
});

export default store;
