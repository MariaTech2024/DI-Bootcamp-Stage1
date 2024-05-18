import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

//Async action to increment age after a delay
export const ageUpAsync = createAsyncThunk(
  'age/ageUpAsync', //The action type string
  async (_, { dispatch }) => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); //Simulate a delay of 1 second
    return 1; //Resolve with a value of 1 to increment the age
  }
);

//Async action to decrement age after a delay
export const ageDownAsync = createAsyncThunk(
  'age/ageDownAsync', //The action type string
  async (_, { dispatch }) => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); //Simulate a delay of 1 second
    return -1; //Resolve with a value of -1 to decrement the age
  }
);

//Create a slice of the state for managing age
const ageSlice = createSlice({
  name: 'age', //Name of the slice
  initialState: {
    value: 0, //Initial age value
    loading: false //Initial loading state
  },
  reducers: {}, //Empty reducers object, as we are using extraReducers for async actions
  extraReducers: (builder) => {
    builder
      //Handle pending state for ageUpAsync action
      .addCase(ageUpAsync.pending, (state) => {
        state.loading = true; //Set loading to true while the async action is in progress
      })
      //Handle fulfilled state for ageUpAsync action
      .addCase(ageUpAsync.fulfilled, (state, action) => {
        state.value += action.payload; //Increment age by the resolved value (1)
        state.loading = false; //Set loading to false as the action is complete
      })
      //Handle pending state for ageDownAsync action
      .addCase(ageDownAsync.pending, (state) => {
        state.loading = true; //Set loading to true while the async action is in progress
      })
      //Handle fulfilled state for ageDownAsync action
      .addCase(ageDownAsync.fulfilled, (state, action) => {
        state.value += action.payload; //Decrement age by the resolved value (-1)
        state.loading = false; //Set loading to false as the action is complete
      });
  }
});

//Export the reducer to be used in the store
export default ageSlice.reducer;