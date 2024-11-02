import { configureStore } from "@reduxjs/toolkit";

import { markdownSlice } from "./slices/markdown";

export const store = configureStore({
    reducer: {
        markdown: markdownSlice.reducer
    }
})