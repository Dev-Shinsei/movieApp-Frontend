import { createSlice } from "@reduxjs/toolkit";

interface Favorite {
  mediaId: number;
}

export const userSlice = createSlice({
  name: "User",
  initialState: {
    user: null,
    listFavorites: [],
  },
  reducers: {
    setUser: (state, action) => {
      if (action.payload === null) {
        localStorage.removeItem("movieApp-Token");
      } else {
        if (action.payload.token) {
          localStorage.setItem("movieApp-Token", action.payload.token);
        }
      }

      state.user = action.payload;
    },
    setListFavorites: (state, action) => {
      state.listFavorites = action.payload;
    },
    removeFavorite: (state, action) => {
      const { mediaId } = action.payload;
      state.listFavorites = [...state.listFavorites].filter(
        (e: { mediaId: any }) => e.mediaId.toString() !== mediaId.toString()
      );
    },
    addFavorite: ({ state, action }: any) => {
      state.listFavorites = [action.payload, ...state.listFavorites];
    },
  },
});

export const { setUser, setListFavorites, removeFavorite, addFavorite } =
  userSlice.actions;

export default userSlice.reducer;
