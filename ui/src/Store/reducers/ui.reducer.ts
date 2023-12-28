import { Action, createReducer, on } from '@ngrx/store';
import { UiActions } from '../actions';

export interface UiState {
  isMobileScreen: boolean;
}

export const initialState: UiState = {
  isMobileScreen: false,
};

const uiReducer = createReducer(
  initialState,

  on(UiActions.onWindowResize, (state, { innerWidth }) => {
    const isMobileScreen = innerWidth < 1010;

    return {
      ...state,
      isMobileScreen,
    };
  })
);

export const reducer = (state: UiState | undefined, action: Action) =>
  uiReducer(state, action);
