import React, { createContext, useReducer } from "react";

interface IMovieIdList {
  movieIdList: any[];
}

enum ActionType {
  AddMovieId,
  DeleteMovieId,
  DeleteAllMoieId,
}

interface AddMovie {
  type: ActionType.AddMovieId;
  payload: any[];
}

interface DeleteMovie {
  type: ActionType.DeleteMovieId;
  payload: number;
}

interface DeleteAllMovie {
  type: ActionType.DeleteAllMoieId;
}

type IMovieAction = AddMovie | DeleteMovie | DeleteAllMovie;

const localData = localStorage.getItem("myMovieId");

const initialState: IMovieIdList = {
  movieIdList: JSON.parse(localData as string) || [],
};

export const MovieContext = createContext<{
  state: IMovieIdList;
  dispatch: React.Dispatch<IMovieAction>;
}>({
  state: initialState,
  dispatch: () => undefined,
});

const movieReducer = (state: IMovieIdList, action: IMovieAction) => {
  switch (action.type) {
    case ActionType.AddMovieId:
      return {
        ...state,
        movieIdList: state.movieIdList.concat(action.payload),
      };

    case ActionType.DeleteMovieId:
      const index = state.movieIdList.findIndex((id) => id === action.payload);
      const newList = state.movieIdList.filter((id, i) => {
        return index !== i;
      });
      return {
        ...state,
        movieIdList: newList,
      };
    case ActionType.DeleteAllMoieId:
      return { ...state, movieIdList: [] };

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

// helper function

export const addMovieId = (payload: any[]): AddMovie => ({
  type: ActionType.AddMovieId,
  payload,
});

export const deleteMovieId = (payload: number): DeleteMovie => ({
  type: ActionType.DeleteMovieId,
  payload,
});

export const deleteAllMovieId = (): DeleteAllMovie => ({
  type: ActionType.DeleteAllMoieId,
});
