import { configureStore, createSlice } from "@reduxjs/toolkit";

let modalContact = createSlice({
    name: 'modalContact',
    initialState : false,
    reducers : {
        changeModalContact(state){
            if(state === true){
                document.body.style.overflow = 'unset';
                return false
            } else {
                document.body.style.overflow = 'hidden';
                return true
            }
        }
    }
});

export default configureStore({
    reducer: {
        modalContact: modalContact.reducer
    }
})

export let { changeModalContact } = modalContact.actions 