import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import * as fromUi from './ui.reducer';

export interface AppState {
  ui: fromUi.UiState;
}

export const reducers: ActionReducerMap<AppState> = {
  ui: fromUi.reducer,
};

export const getUiFeatureState = createFeatureSelector<AppState>('ui');

export const getUiState = createSelector(getUiFeatureState, (uiState) => {
  return uiState.ui;
});
