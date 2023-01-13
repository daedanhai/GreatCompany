import { configureStore, createSlice } from "@reduxjs/toolkit";

let modalContact = createSlice({
    name: 'modalContact',
    initialState : '',
    reducers : {
        changeModalContact(){
            console.log('debug:');
        }
    }
});

export default configureStore({
    reducer: {
        modalContact: modalContact.reducer
    }
})

export let { changeModalContact } = modalContact.actions 