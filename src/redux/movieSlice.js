import { createSlice } from "@reduxjs/toolkit";


const initialState={
    movie:[{
        name:"amit",
        id:1
    }],
    topRated:[],
    search:[],
    Tvshow:[],

}


const movieSlice = createSlice({
    name :"movie",
    initialState,
    reducers:{
      setMovie:(state,action)=>{
        state.movie = action.payload;
      },
      settopRated:(state,action)=>{
        state.topRated = action.payload;
      },
      setTvshow:(state,action)=>{
        state.Tvshow = action.payload;
      },
      setsearch:(state,action)=>{
        state.search = action.payload;
      }
    }
})


export const{setMovie,settopRated,setTvshow,setsearch}=movieSlice.actions;

export default movieSlice.reducer;