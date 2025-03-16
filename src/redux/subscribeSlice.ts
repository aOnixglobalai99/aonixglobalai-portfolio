import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface SubscribeState {

    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
    message: string | null;  // ✅ Added message state
}

const initialState: SubscribeState = {
  
    status: 'idle',
    error: null,
    message: null  // ✅ Initialize message state
};

interface ApiResponse {
    success: boolean;
    message?: string;  // ✅ Message from API
}

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000";

export const subscribeEmail = createAsyncThunk<
    ApiResponse,  // ✅ Success response type
    string,       // ✅ Argument type (email)
    { rejectValue: { message: string } } // ✅ Error response type
>(
    "subscribe/subscribeEmail",
    async (email, { rejectWithValue }) => {
        try {
            const response = await fetch(`${BASE_URL}/api/subscribe`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            const data: ApiResponse = await response.json();

            if (!response.ok) {
                return rejectWithValue({ message: data.message || "Subscription failed" });
            }

            return data;
        } catch (error: any) {
            return rejectWithValue({ message: error.message || "Something went wrong" });
        }
    }
);




const subscribeSlice = createSlice({
    name: "subscribe",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(subscribeEmail.pending, (state) => {
              state.status = 'loading';
              state.error = null;
              state.message = null;  // ✅ Clear message on new request
          })
          .addCase(subscribeEmail.fulfilled, (state, action) => {
            
              state.status = "succeeded";
              state.message = action.payload.message || "Successfully subscribed";  // ✅ Extract message
          })
          .addCase(subscribeEmail.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.payload?.message ?? "An unknown error occurred";  
            state.message = action.payload?.message ?? "An unknown error occurred";  
        });
        
    }
});

export default subscribeSlice.reducer;
