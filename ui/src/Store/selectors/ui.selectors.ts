import { createSelector } from '@ngrx/store';
import { getUiFeatureState, getUiState } from '../reducers';

// export const isMobileScreen = createSelector(
//   getUiState,
//   (state) => state.isMobileScreen
// );

export const isMobileScreen = createSelector(getUiFeatureState, (state) => {
  console.log(state);

  return false;
});
