// features/counter/interface.ts

import { createModule } from 'typeless';
import { CounterSymbol } from './symbol';

// initialize the module
export const [useModule, CounterActions, getCounterState] = createModule(CounterSymbol)
  // Create Actions Creators
  .withActions({
    startCount: null, // null means no args
    countDone: (count: number) => ({ payload: { count } }),
  })
  //
  .withState<CounterState>();

export interface CounterState {
  isLoading: boolean;
  count: number;
}