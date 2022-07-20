import { createSlice } from "@reduxjs/toolkit";


export const adventureSlice = createSlice({
    name: "adventures",
    initialState:{
        listAdventures: []
    },
    reducers:{
        setlistAdventures : (state, action) => {
            console.log(action.payload);
             const newAdventures = [...state.listAdventures, action.payload  ];
             state.listAdventures = newAdventures;
        }
    }
})

export const {setlistAdventures} = adventureSlice.actions
export default adventureSlice.reducer
