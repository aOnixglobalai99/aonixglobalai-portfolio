import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';


interface ContactForm {
  
    name: string;
    email: string;
    telephone:string;
    subject:string;
    message: string;
}

interface ContactState {
    forms: ContactForm[];
    loading: boolean;
    error: string | null;
    successMessage: string | null; // ✅ Add success message
  }
  
  const initialState: ContactState = {
    forms: [],
    loading: false,
    error: null,
    successMessage: null, // ✅ Initialize message state
  };
  export const submitContactForm = createAsyncThunk(
    'contact/submitContactForm',
    async (form: ContactForm) => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/contact/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
  
      const data = await response.json(); // Expecting `{ message: string, data: ContactForm }`
      console.log(data);
  
      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit contact form');
      }
  
      return data; // ✅ Return `{ message: "...", data: {...} }`
    }
  );
  
const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
           
            .addCase(submitContactForm.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(submitContactForm.fulfilled, (state, action: PayloadAction<{ message: string; data: ContactForm }>) => {
                state.loading = false;
                state.forms.push(action.payload.data);
                state.successMessage = action.payload.message; // ✅ Store success message
              })
              
            .addCase(submitContactForm.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to submit contact form';
            });
    },
});

export default contactSlice.reducer;