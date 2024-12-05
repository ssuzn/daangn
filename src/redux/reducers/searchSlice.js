import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        searchTerm: "",
        results: [],
    },
    reducers: {
        // 검색어 업데이트
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
        // 검색 결과 업데이트
        setResults: (state, action) => {
            state.results = action.payload;
        },
    },
});

export const { setSearchTerm, setResults } = searchSlice.actions;

export default searchSlice.reducer;