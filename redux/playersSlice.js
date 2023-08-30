import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const playersSlice = createSlice({
    name: "players",
    initialState,
    reducers: {
        setPointsToAdd: (state, action) => {
            const { playerId, newScore } = action.payload;
            const playerIndex = state.findIndex(
                (player) => player.id === playerId
            );

            if (playerIndex > -1) {
                state[playerIndex].pointsToAdd = newScore;
            }
        },

        addPoints: (state) => {
            state.forEach((player) => {
                let newTotal = player.points + player.pointsToAdd;
                player.points = newTotal;
                player.pointsHistory.push(newTotal);
                player.pointsToAdd = 0; // Resets pointsToAdd
            });
        },

        editPoints: (state, action) => {
            const { playerId, newScore } = action.payload;
            const playerIndex = state.findIndex(
                (player) => player.id === playerId
            );
            const lastPointIndex = state[playerIndex].pointsHistory.length;

            if (playerIndex > -1) {
                state[playerIndex].pointsHistory[lastPointIndex - 1] = newScore;
                state[playerIndex].points = newScore;
            }
        },

        generatePlayer: (state, action) => {
            const newPlayer = action.payload;
            state.push(newPlayer);
        },

        removePlayer: (state, action) => {
            const playerId = action.payload;
            const playerIndex = state.findIndex(
                (player) => player.id === playerId
            );
            state.splice(playerIndex, 1);
        },

        shufflePlayerList: (state, action) => {
            return [...action.payload];
        },

        changePlayerName: (state, action) => {
            const { playerId, newName } = action.payload;
            const playerIndex = state.findIndex(
                (player) => player.id === playerId
            );
            if (playerIndex > -1) {
                state[playerIndex].name = newName;
            }
        },

        clearState: (state, action) => {
            state.splice(0, state.length);
        },

        clearPoints: (state, action) => {
            state.map((player) => {
                player.points = 0;
                player.pointsHistory = [];
            });
        },
        loadPlayerState: (state, action) => {
            return action.payload;
        },
    },
});

export const {
    setPointsToAdd,
    addPoints,
    generatePlayer,
    removePlayer,
    changePlayerName,
    editPoints,
    shufflePlayerList,
    clearState,
    clearPoints,
    loadPlayerState,
} = playersSlice.actions;

export default playersSlice.reducer;
