import { postApi } from "@/helper/apis";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const userLogin = createAsyncThunk('user/login', async (formData, { rejectWithValue }) => {
    const resp = await postApi('user/login', formData)
    if (!resp?.success) {
        rejectWithValue(resp?.data?.message)
    }
    return resp
})

const initialState = {
    data: {},
    status: 'loading',
    error: {}
}

export const userSlicer = createSlice({
    name: 'User',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(userLogin.pending, (state) => {
            state.status = 'loading'
        })
            .addCase(userLogin.fulfilled, (state, action) => {
                state.data = { ...action.payload?.data?.user }
                state.status = 'resolved'
            })
            .addCase(userLogin.rejected, (state, action) => {
                state.error = action.payload || 'Something Went wrong'
                state.status = 'rejected'
            })
    }
})

let { } = userSlicer.actions;
export default userSlicer.reducer;