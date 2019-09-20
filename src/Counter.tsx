// features/counter/components/Counter.tsx\
import React from 'react';
import { useActions } from 'typeless';
import { CounterActions, getCounterState } from './interface';

// Create a stateless component with hooks
// NOTE: there are no type annotations, and the below code is 100% type-safe!
 const Counter: React.FC = () => {
  // wrap actions with `dispatch`
  const { startCount } = useActions(CounterActions);
  // get state from store
  const { isLoading, count } = getCounterState.useState();

  return (
    <div>
      <button disabled={isLoading} onClick={startCount}>
        {isLoading ? 'loading...' : 'increase'}
      </button>
      <div>count: {count}</div>
    </div>
  );
}

export default Counter;