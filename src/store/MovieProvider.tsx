import React, { createContext, useReducer } from "react";

interface IMovieIdList {
  movieIdList: any[];
}

const localData = localStorage.getItem("myMovieId");

const initialState: IMovieIdList = {
  movieIdList: JSON.parse(localData as string) || [],
};

interface AddMovie {
  type: "AddMovieId";
  payload: any[];
}

export const MovieContext = createContext<{
  state: IMovieIdList;
  dispatch: React.Dispatch<AddMovie>;
}>({
  state: initialState,
  dispatch: () => undefined,
});

const movieReducer = (state: IMovieIdList, action: AddMovie) => {
  switch (action.type) {
    case "AddMovieId":
      console.log(action.payload);
      return {
        ...state,
        movieIdList: state.movieIdList.concat(action.payload),
      };

    default:
      return { ...state };
  }
};

export const MovieProvider = ({ children }: { children: JSX.Element }) => {
  const [movieState, movieDispatch] = useReducer(movieReducer, initialState);

  return (
    <MovieContext.Provider
      value={{ state: movieState, dispatch: movieDispatch }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export const addMovieId = (payload: any[]): AddMovie => ({
  type: "AddMovieId",
  payload,
});
