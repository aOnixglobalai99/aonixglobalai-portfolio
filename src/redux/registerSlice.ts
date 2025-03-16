import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

// Define the interface for a registered user
interface RegisteredUser {

  fullName: string;
  email: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  postalCode: string;
  resume: File|null;
  coverLetter: string;
}

// Define the API response structure
interface ApiResponse<T> {
  message: string;
  data: T;
}

// Define the state structure
interface RegisterState {
  users: RegisteredUser[];
  message: string | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

// Initial state
const initialState: RegisterState = {
  users: [],
  message: null,
  status: "idle",
  error: null,
};

// API base URL
const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000";

// ✅ Register a new user
export const registerUser = createAsyncThunk('user/registerUser', async (form: RegisteredUser) => {
    console.log("payload", form);

    const formData = new FormData();
    formData.append("fullName", form.fullName);
    formData.append("email", form.email);
    formData.append("phone", form.phone);
    formData.append("street", form.street);
    formData.append("city", form.city);
    formData.append("state", form.state);
    formData.append("postalCode", form.postalCode);
    formData.append("coverLetter", form.coverLetter);

    if (form.resume) {
        formData.append("resume", form.resume);
    }

    const response = await fetch(`${BASE_URL}/api/user/register`, {
        method: 'POST',
        body: formData,  // ✅ Send FormData instead of JSON
    });

    const data = await response.json();
    console.log(data);
    return data;
});


// Create the slice
const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
  
  },
  extraReducers: (builder) => {
    builder
      // ✅ Register User - Pending
      .addCase(registerUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      
      // ✅ Register User - Fulfilled
      .addCase(registerUser.fulfilled, (state, action: PayloadAction<ApiResponse<RegisteredUser>>) => {
        state.status = "succeeded";
        state.users.push(action.payload.data);
        state.message = action.payload.message;
      })
      
      // ✅ Register User - Rejected
      .addCase(registerUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export default registerSlice.reducer;
