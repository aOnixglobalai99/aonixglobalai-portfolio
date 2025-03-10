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
}

const initialState: ContactState = {
    forms: [],
    loading: false,
    error: null,
};


// Async thunk for submitting a contact form
    export const submitContactForm = createAsyncThunk('contact/submitContactForm', async (form: ContactForm) => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/contact/send`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
    });
    const data: ContactForm = await response.json();
    console.log(data)
    return data;
});

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
            .addCase(submitContactForm.fulfilled, (state, action: PayloadAction<ContactForm>) => {
                state.loading = false;
                state.forms.push(action.payload);
            })
            .addCase(submitContactForm.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to submit contact form';
            });
    },
});

export default contactSlice.reducer;