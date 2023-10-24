import { MovieType2 } from "@/types";
import { atom } from "recoil";

type DataType = {
  // results: MovieType2[];
  results: any[];
};

export const searchDataState = atom<DataType>({
  key: "searchData",
  default: {
    results: [],
  },
});
