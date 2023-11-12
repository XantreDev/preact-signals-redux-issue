import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    counter: (state: number = 0, action: { type: "increment" }) => {
      if (action.type === "increment") {
        return state + 1;
      }
      return state;
    },
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
