import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { UiActions } from '../actions';
import { AppState } from '../reducers';
import { UiSelectors } from '../selectors';

@Injectable({ providedIn: 'root' })
export class UiFacade {
  private readonly store: Store = inject(Store<AppState>);

  isMobileScreen$ = this.store.select(UiSelectors.isMobileScreen);

  onWindowResize(innerWidth: number): void {
    this.store.dispatch(UiActions.onWindowResize({ innerWidth }));
  }
}
