import { createReducer, on, Action } from '@ngrx/store';
import { IngresoEgreso } from '../models/ingreso-egreso';
import { setItems, unSetItems } from './ingreso-egreso.actions';
import { AppState } from '../app.reducer';

export interface State {
  items: IngresoEgreso[];
}
export interface AppStateWithIngresoEgreso extends AppState {
  ingresosEgresos: State;
}
export const initialState: State = {
  items: [],
};

const _ingresoEgresoReducer = createReducer<State, Action>(
  initialState,
  on(setItems, (state, { items }) => ({ ...state, items: [...items] })),
  on(unSetItems, (state) => ({ ...state, items: [] }))
);

export function ingresoEgresoReducer(
  state: State = initialState,
  action: Action
) {
  return _ingresoEgresoReducer(state, action);
}
