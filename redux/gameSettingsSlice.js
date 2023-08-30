import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    maxPoints: 300,
    noOfPlayers: 2,
    namesData: [],
    colorsData: [],
};

export const gameSettingsSlice = createSlice({
    name: "gameSettings",
    initialState,
    reducers: {
        changeMaxPoints: (state, action) => {
            const { newMaxPoints } = action.payload;
            state.maxPoints = newMaxPoints;
        },
        changeNoOfPlayers: (state, action) => {
            const newNoOfPlayers = action.payload;
            state.noOfPlayers = newNoOfPlayers;
        },
        resetToInitialState: (state, action) => {
            state.noOfPlayers = initialState.noOfPlayers;
            state.maxPoints = initialState.maxPoints;
        },
        setNamesData: (state, action) => {
            state.namesData = action.payload;
        },

        setColorsData: (state, action) => {
            state.colorsData = action.payload;
        },

        loadSettingsState: (state, action) => {
            state = action.payload;
        },
    },
});

export const {
    changeMaxPoints,
    changeNoOfPlayers,
    resetToInitialState,
    setNamesData,
    setColorsData,
    loadSettingsState,
} = gameSettingsSlice.actions;

export default gameSettingsSlice.reducer;
