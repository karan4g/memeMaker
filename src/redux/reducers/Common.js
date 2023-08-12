import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    memeData:[],
    isLoading:false
}

export const commonReducer = createSlice({
  name: 'memes',
  initialState,
  reducers: {
    GET_MEME(state) {
        state.isLoading = true;
        state.memeData = [];

    },
    GET_MEME_SUCCESSFULL(state,action) {
      state.isLoading = false;
      state.memeData = action.payload || [];
    },
    GET_MEME_FAILED(state){
      state.isLoading = false;
      state.memeData = [];

    },
  },
})

// Action creators are generated for each case reducer function
export const { GET_MEME, GET_MEME_SUCCESSFULL, GET_MEME_FAILED } = commonReducer.actions

export default commonReducer.reducer