import { createSlice } from "@reduxjs/toolkit";

const contenidoDefault = "Incididunt dolore dolor pariatur tempor. Magna culpa sunt sint culpa est irure voluptate elit Lorem ut reprehenderit laborum. Quis amet reprehenderit incididunt nisi aliqua magna sunt ea. Et aute veniam excepteur nostrud nulla officia consequat quis quis elit ex incididunt ad nulla."

const notas = [
    {
        title: "Titulo 1",
        id: 1,
        tags: [1, 2, 3],
        favourite: true,
        content: contenidoDefault
    },
    {
        title: "Titulo 2",
        id: 2,
        tags: [3, 2],
        favourite: true,
        content: contenidoDefault
    },
    {
        title: "Titulo 3",
        id: 3,
        tags: [3, 1],
        favourite: false,
        content: contenidoDefault
    },
    {
        title: "Titulo 4",
        id: 4,
        tags: [1],
        favourite: false,
        content: contenidoDefault
    },
    {
        title: "Titulo 5",
        id: 5,
        tags: [1, 2],
        favourite: false,
        content: contenidoDefault
    },
    {
        title: "Titulo 6",
        id: 6,
        tags: [3, 4],
        favourite: false,
        content: contenidoDefault
    },
    {
        title: "Titulo 7",
        id: 7,
        tags: [4, 1],
        favourite: false,
        content: contenidoDefault
    },
];

const notasSlice = createSlice({

    name: "notas",
    initialState: notas,
    reducers: {
        toggleFavourite: (state, action) => {
            const index = state.findIndex(n => n.id === action.payload.id);
            state[index].favourite = !state[index].favourite;
        },
        deleteNote: (state, action) => {
            return state.filter(n => n.id !== action.payload.id);
        },
        editNote: (state, action) => {
            const newContent = action.payload.content;
            const index = action.payload.id;

            state[index].content = newContent;
        },
        addTag: (state, action) => {
            const index = action.payload.noteId;
            const tagId = action.payload.tagId;

            state[index].tags.push(tagId);
        },
        removeTag: (state, action) => {
            const index = action.payload.noteId;
            const tagId = action.payload.tagId;

            state[index].tags = state[index].tags.filter(t => t.id !== tagId);
        }
    }
});

export const { toggleFavourite, addTag, removeTag, editNote, deleteNote } = notasSlice.actions;
export default notasSlice.reducer;