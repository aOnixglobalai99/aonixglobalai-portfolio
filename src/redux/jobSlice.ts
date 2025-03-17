import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface Job {
    _id: string;
    title: string;
    jobType: string;
    dateOpened: string;
    city: string;
    requirements: string[];
}

interface JobState {
    jobs: Job[];
    job: Job | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: JobState = {
    jobs: [],
    job: null,
    status: 'idle',
    error: null,
};

export const getAllJobs = createAsyncThunk(
    'jobs/getAllJobs',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/jobs`);
            if (!response.ok) throw new Error('No job available!!');
            const data: { data: Job[] } = await response.json();
            return data.data;
        } catch (err) {
            let errorMessage = 'An unknown error occurred';
            if (err instanceof Error) {
                errorMessage = err.message;
            } else if (typeof err === 'string') {
                errorMessage = err;
            }
            return rejectWithValue(errorMessage);
        }
    }
);

export const getJobById = createAsyncThunk(
    'jobs/getJobById',
    async (id: string, { rejectWithValue }) => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/jobs/${id}`);
            if (!response.ok) throw new Error('Job not found');
            const data: { data: Job } = await response.json();
            return data.data;
        } catch (err) {
            let errorMessage = 'An unknown error occurred';
            if (err instanceof Error) {
                errorMessage = err.message;
            } else if (typeof err === 'string') {
                errorMessage = err;
            }
            return rejectWithValue(errorMessage);
        }
    }
);

const jobSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllJobs.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getAllJobs.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.jobs = action.payload;
            })
            .addCase(getAllJobs.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload as string;
            })
            .addCase(getJobById.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getJobById.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.job = action.payload;
            })
            .addCase(getJobById.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload as string;
            });
    },
});

export default jobSlice.reducer;
