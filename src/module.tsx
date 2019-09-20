// features/counter/module.ts
import React from 'react';
import * as Rx from 'typeless/rx';
import { CounterActions, CounterState, useModule } from './interface';
import Counter from './Counter';

// Create Epic for side effects
useModule
    .epic()
    // Listen for `count` and dispatch `countDone` with 500ms delay
    .on(CounterActions.startCount, () =>
        Rx.of(CounterActions.countDone(1)).pipe(Rx.delay(1000))
    );

const initialState: CounterState = {
    isLoading: false,
    count: 0,
};

// Create a reducer
// It's compatible with a standard reducer `(state, action) => state`
// Under the hood it uses `immer` and state mutations are allowed
useModule
    .reducer(initialState)
    .on(CounterActions.startCount, state => {
        state.isLoading = true;
    })
    .on(CounterActions.countDone, (state, { count }) => {
        state.isLoading = false;
        state.count += count;
    });

// Entry point component for this module
const CounterModule: React.FC = () => {
    // load epic and reducer
    useModule();

    return <Counter />;
}

export default CounterModule;