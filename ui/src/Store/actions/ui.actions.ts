import { createAction, props } from '@ngrx/store';

export const onWindowResize = createAction(
  '[Ui] On Window Resize',
  props<{ innerWidth: number }>()
);
