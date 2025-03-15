import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface ApplicationForm {
    jobId: string,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    city: string,
    skills: string,
    resume: File|null,
    coverLetter: string
}

interface ApplicationState {
    forms: ApplicationForm[];
    loading: boolean;
    error: string | null;
}

const initialState: ApplicationState = {
    forms: [],
    loading: false,
    error: null,
};

export const applyJob = createAsyncThunk('job/applyJob', async (form: ApplicationForm) => {
    console.log("payload", form);

    const formData = new FormData();
    formData.append("jobId", form.jobId);
    formData.append("firstName", form.firstName);
    formData.append("lastName", form.lastName);
    formData.append("email", form.email);
    formData.append("phone", form.phone);
    formData.append("city", form.city);
    formData.append("skills", form.skills);
    formData.append("coverLetter", form.coverLetter);

    if (form.resume) {
        formData.append("resume", form.resume);
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/applications`, {
        method: 'POST',
        body: formData,  // ✅ Send FormData instead of JSON
    });

    const data = await response.json();
    console.log(data);
    return data;
});


const applicationSlice = createSlice({
    name: 'application',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
             .addCase(applyJob.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
            .addCase(applyJob.fulfilled, (state, action: PayloadAction<ApplicationForm>) => {
                state.loading = false;
                state.forms.push(action.payload);
            })
            .addCase(applyJob.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to submit application form';
            });
    }
})

export default applicationSlice.reducer;