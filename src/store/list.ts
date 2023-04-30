import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";

interface List {
  id: number;
  text: string;
}

const initialState: { item: List[] } = {
  item: [],
};

export const listSlice = createSlice({
  name: "List",
  initialState,
  reducers: {
    AddToList: (state, action: PayloadAction<string>) => {
      state.item = [
        ...state.item,
        {
          id: state.item[state.item.length - 1]?.id + 1 || 0,
          text: action.payload,
        },
      ];
    },
    RemoveFromList: (state, action: PayloadAction<number>) => {
      state.item = state.item.filter(({ id }) => id !== action.payload);
    },
    DeleteList: (state) => {
      state.item = []
    },
  },
});

export const {
  AddToList,
  RemoveFromList,
  DeleteList
} = listSlice.actions;

export const SelectListType = (state: RootState) => state.list.item;