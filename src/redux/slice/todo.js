import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
    }
};


export const fetchBusinesses = createAsyncThunk('fetchBusinesses', async ({term, location, sortby}) => {
    const response = await fetch(`https://api.yelp.com/v3/businesses/search?location=${location}&term=${term}&sort_by=${sortby}&limit=50`, options)
    const data = await response.json();
    return data;
})

const initialBusinessState = {
    isLoading: false,
    data: null,
    isError: false
}

const todoSlice = createSlice({
    name: 'todo',
    initialState: initialBusinessState,
    extraReducers: (builder) => {
        builder.addCase(fetchBusinesses.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(fetchBusinesses.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload
        })
        builder.addCase(fetchBusinesses.rejected, (state, action) => {
            console.log("Error", action.payload)
            state.isError = true
        })
    }
})

export default todoSlice.reducer