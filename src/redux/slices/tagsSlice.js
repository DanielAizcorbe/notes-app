const { createSlice } = require("@reduxjs/toolkit");

const tags = [
    {
        id: 1,
        label: "computer",
        color: "red"
    },
    {
        id: 2,
        label: "language",
        color: "green"
    },
    {
        id: 3,
        label: "teatro",
        color: "blue"
    },
    {
        id: 4,
        label: "español",
        color: "yellow"
    },
    {
        id: 5,
        label: "sistemas",
        color: "pink"
    },
    {
        id: 6,
        label: "react",
        color: "lightblue"
    }
];

const tagsSlice = createSlice({
    name: "tags",
    initialState: tags,
    reducer: {
        createTag: (state, action) => {
            state.push(action.payload);
        },
        deleteTag: (state, action) => {
            state = state.filter(t => t.id !== action.payload.id);
        },
    }
});

export const { createTag, deleteTag } = tagsSlice.actions;
export default tagsSlice.reducer;